import { Box } from 'components/Box/Box';

import RandomIcon from 'components/RandomIcon/RandomIcon';
import ActionBtns from './ActionBtns/ActionBtns';

export default function ContactCard({ contact, deleteContact }) {
  const { id, name, number } = contact;
  return (
    <>
      <RandomIcon />
      <Box>
        <h3>{name}</h3>
        <Box display="flex" alignItems="center" color="text">
          <p>{number}</p>
        </Box>
      </Box>
      <ActionBtns number={number} deleteContact={deleteContact} id={id} />
    </>
  );
}
