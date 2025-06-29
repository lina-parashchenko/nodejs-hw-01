import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const count = Number(process.argv[2]) || 1;

const generateContacts = async (number) => {
  try {
    const existingContacts = await readContacts();

    const newContacts = Array.from({ length: number }, () =>
      createFakeContact(),
    );

    const updatedContacts = [...existingContacts, ...newContacts];

    await writeContacts(updatedContacts);

    console.log(
      `Add ${number} new contacts. All now: ${updatedContacts.length}`,
    );
  } catch (error) {
    console.error('Error generating contacts:', error.message);
  }
};

generateContacts(count);
