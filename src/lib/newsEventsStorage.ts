const STORAGE_KEYS = {
  NEWS: "news-items",
  EVENTS: "events-items",
  SETTINGS: "app-settings",
} as const;

const isLovableStorage =
  typeof window !== "undefined" &&
  typeof (window as any).storage !== "undefined" &&
  typeof (window as any).storage?.set === "function";

async function getItems<T>(key: string): Promise<T[]> {
  try {
    if (isLovableStorage) {
      const result = await (window as any).storage.get(key);
      return result ? JSON.parse(result.value) : [];
    } else {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : [];
    }
  } catch {
    return [];
  }
}

async function setItems<T>(key: string, items: T[]): Promise<void> {
  const json = JSON.stringify(items);
  if (isLovableStorage) {
    await (window as any).storage.set(key, json);
  } else {
    localStorage.setItem(key, json);
  }
}

async function removeItems(key: string): Promise<void> {
  if (isLovableStorage) {
    await (window as any).storage.delete(key);
  } else {
    localStorage.removeItem(key);
  }
}

export { STORAGE_KEYS, getItems, setItems, removeItems };
