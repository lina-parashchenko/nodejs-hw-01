import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const contacts = await readContacts();

    if (contacts.length === 0) {
      console.log('⚠️ Список контактів уже порожній. Видаляти нічого.');
      return;
    }

    const removed = contacts[contacts.length - 1];
    contacts.pop(); // видаляємо останній

    await writeContacts(contacts);

    console.log('Removed last contact:', removed);
  } catch (error) {
    console.error('Error deleting last contacts:', error.message);
  }
};

removeLastContact();
