import { Box } from 'components/Box/Box';
import { SubTitle } from './AddContacts.styled';

export default function AddContact({ openModal }) {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      pl={3}
      pr={3}
      mt={5}
      mb={5}
    >
      <SubTitle>Contacts</SubTitle>
      <button type="buttons" className="btn" onClick={openModal}>
        +Add Contact
      </button>
    </Box>
  );
}
