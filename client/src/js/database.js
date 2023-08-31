import { openDB } from 'idb';

const initializeDatabase = async () => {
  // Create a new database using version 1
  openDB('myTextEditorDB', 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains('editorData')) {
        // Create a new object store for editor data
        db.createObjectStore('editorData', { keyPath: 'id', autoIncrement: true });
        console.log('Database initialized');
      }
    },
  });
};

// Method to add content to the database
export const saveToDatabase = async (content) => {
  const db = await openDB('myTextEditorDB', 1);
  const tx = db.transaction('editorData', 'readwrite');
  const store = tx.objectStore('editorData');
  const request = store.put({ value: content });
  const result = await request;
  console.log('Content saved to the database', result);
};

// Method to retrieve all content from the database
export const getFromDatabase = async () => {
  console.log('Retrieving data from the database');
  const db = await openDB('myTextEditorDB', 1);
  const tx = db.transaction('editorData', 'readonly');
  const store = tx.objectStore('editorData');
  const request = store.getAll();
  const result = await request;
  console.log(result);
  return result;
};

// Initialize the database
initializeDatabase();
