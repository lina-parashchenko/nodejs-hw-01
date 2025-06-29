import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  try {
    const contacts = await readContacts();
    const total = contacts.length;
    console.log(`Number of contacts: ${total}`);
    return total;
  } catch (error) {
    console.error('Error counting contacts:', error.message);
  }
};

console.log(await countContacts());
