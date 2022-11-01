import { Box } from 'components/Box/Box';
import { BsTelephoneFill } from 'react-icons/bs';
import { FaTrashAlt } from 'react-icons/fa';
import { BtnDelete, TelLink, ActionItem } from './ActionBtns.styled';

export default function ActionBtns({ number, id, deleteContact }) {
  return (
    <Box as="ul" ml="auto" display="flex">
      <ActionItem>
        <TelLink href={`tel:${number}`}>
          <BsTelephoneFill />
        </TelLink>
      </ActionItem>
      <ActionItem>
        <BtnDelete
          type="button"
          onClick={() => {
            deleteContact(id);
          }}
        >
          <FaTrashAlt size="1.5rem" color="inherit" />
        </BtnDelete>
      </ActionItem>
    </Box>
  );
}
