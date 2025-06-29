import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    const contacts = await readContacts(); // зчитуємо з файлу
    console.log('All contacts:');
    console.table(contacts);
    return contacts;
  } catch (error) {
    console.error('Error getting contacts:', error.message);
  }
};

console.log(await getAllContacts());
