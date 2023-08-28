import { openDB } from 'idb';

const DATABASE_NAME = 'myDatabase';
const DATABASE_VERSION = 1;
const STORE_NAME = 'dataStore';

const initializeDatabase = () => {
  return openDB(DATABASE_NAME, DATABASE_VERSION, {
    upgrade(database) {
      if (database.objectStoreNames.contains(STORE_NAME)) {
        console.log(`${STORE_NAME} store already exists`);
        return;
      }
      database.createObjectStore(STORE_NAME, { keyPath: 'id', autoIncrement: true });
      console.log(`${STORE_NAME} store created`);
    },
  });
};

export const addToDatabase = async (content) => {
  try {
    const db = await openDB(DATABASE_NAME, DATABASE_VERSION);
    const transaction = db.transaction(STORE_NAME, 'readwrite');
    const dataStore = transaction.objectStore(STORE_NAME);
    await dataStore.put({ value: content, id: 1 });
    await transaction.complete;
    console.log('Data has been added to the database:', content);
  } catch (error) {
    console.error('Error while adding data to the database:', error);
    throw error;
  }
};

export const retrieveFromDatabase = async () => {
  try {
    const db = await openDB(DATABASE_NAME, DATABASE_VERSION);
    const transaction = db.transaction(STORE_NAME, 'readonly');
    const dataStore = transaction.objectStore(STORE_NAME);
    const result = await dataStore.get(1);
    console.log('Retrieved result:', result);
    console.log('Retrieved value:', result.value);
    return result.value;
  } catch (error) {
    console.error('Error while retrieving data from the database:', error);
    throw error;
  }
};

initializeDatabase();
