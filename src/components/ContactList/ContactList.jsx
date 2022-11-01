import { Box } from 'components/Box/Box';
import { ContactItem } from './ContactList.styled';
import PropTypes from 'prop-types';
import ContactCard from '../ContactCard/ContactCard';

export const ContactList = ({ contacts, deleteCon }) => {
  return (
    <Box as="ul" textAlign="left" p={0} width="100%" mt={4}>
      {contacts.map(contact => {
        return (
          <ContactItem key={contact.id}>
            <ContactCard contact={contact} deleteContact={deleteCon} />
          </ContactItem>
        );
      })}
    </Box>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  deleteCon: PropTypes.func.isRequired,
};
