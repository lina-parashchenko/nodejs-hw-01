import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  try {
    await writeContacts([]);
    console.log('All contacts have been successfully deleted.');
  } catch (error) {
    console.error('Error when deleting contacts:', error.message);
  }
};

removeAllContacts();
