import { Box } from 'components/Box/Box';
import { Name, Number } from './ContactCard.style';
import RandomIcon from 'components/RandomIcon/RandomIcon';
import ActionBtns from './ActionBtns/ActionBtns';

export default function ContactCard({ contact, deleteContact }) {
  const { id, name, number } = contact;
  return (
    <>
      <RandomIcon />
      <Box>
        <Name>{name}</Name>
        <Box display="flex" alignItems="center" color="text">
          <Number>{number}</Number>
        </Box>
      </Box>
      <ActionBtns number={number} deleteContact={deleteContact} id={id} />
    </>
  );
}
