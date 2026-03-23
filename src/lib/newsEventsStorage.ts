const STORAGE_KEYS = {
  NEWS: "news-items",
  EVENTS: "events-items",
  SETTINGS: "app-settings",
} as const;

async function getItems<T>(key: string): Promise<T[]> {
  try {
    const result = await (window as any).storage.get(key);
    return result ? JSON.parse(result.value) : [];
  } catch {
    return [];
  }
}

async function setItems<T>(key: string, items: T[]): Promise<void> {
  await (window as any).storage.set(key, JSON.stringify(items));
}

export { STORAGE_KEYS, getItems, setItems };
