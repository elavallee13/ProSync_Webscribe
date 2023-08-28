import { openDB } from 'idb';

const DATABASE_NAME = 'jate';
const DATABASE_VERSION = 1;
const OBJECT_STORE_NAME = 'content';

const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(db) {
    if (!db.objectStoreNames.contains(OBJECT_STORE_NAME)) {
      const store = db.createObjectStore(OBJECT_STORE_NAME, {
        keyPath: 'id',
        autoIncrement: true,
      });
    }
  },
});

export const putDb = async (content) => {
  const db = await dbPromise;
  const tx = db.transaction(OBJECT_STORE_NAME, 'readwrite');
  const store = tx.objectStore(OBJECT_STORE_NAME);
  await store.add({ content });
};

export const getDb = async () => {
  const db = await dbPromise;
  const tx = db.transaction(OBJECT_STORE_NAME, 'readonly');
  const store = tx.objectStore(OBJECT_STORE_NAME);
  return store.getAll();
};

export default dbPromise;
