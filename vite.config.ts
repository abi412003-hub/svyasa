import { defineConfig, loadEnv, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

/**
 * Serves the Vercel functions in /api during `npm run dev`, so forms can be
 * tested locally. In production Vercel runs api/*.ts itself.
 */
const devApi = (env: Record<string, string>): Plugin => ({
  name: "dev-api",
  apply: "serve",
  configureServer(server) {
    server.middlewares.use("/api/send-mail", async (req, res) => {
      Object.assign(process.env, env);
      let raw = "";
      for await (const chunk of req) raw += chunk;
      const mod = await server.ssrLoadModule("/api/send-mail.ts");
      const response = {
        status(code: number) {
          res.statusCode = code;
          return response;
        },
        setHeader: (k: string, v: string) => res.setHeader(k, v),
        json(body: unknown) {
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify(body));
        },
      };
      await mod.default({ method: req.method, body: raw }, response);
    });
  },
});

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    devApi(loadEnv(mode, process.cwd(), "")),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
