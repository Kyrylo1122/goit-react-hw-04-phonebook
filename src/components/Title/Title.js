import { Box } from 'components/Box/Box';
import { RiContactsBook2Fill } from 'react-icons/ri';
import { TitleText } from './Title.styled';

export default function Title() {
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <RiContactsBook2Fill size="2rem" />
      <TitleText>Phone Book App</TitleText>
    </Box>
  );
}
