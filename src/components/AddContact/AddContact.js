import { Box } from 'components/Box/Box';

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
      <h2>Contacts</h2>
      <button type="buttons" className="btn" onClick={openModal}>
        +Add Contact
      </button>
    </Box>
  );
}
