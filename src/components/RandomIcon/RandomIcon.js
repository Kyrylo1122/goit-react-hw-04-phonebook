import { Box } from 'components/Box/Box';
import {
  FaUserNinja,
  FaUserNurse,
  FaUserMd,
  FaUserSecret,
  FaUserAstronaut,
  FaUserTie,
} from 'react-icons/fa';
const array = [
  <FaUserNinja size="1.5rem" />,
  <FaUserNurse size="1.5rem" />,
  <FaUserMd size="1.5rem" />,
  <FaUserTie size="1.5rem" />,
  <FaUserSecret size="1.5rem" />,
  <FaUserAstronaut size="1.5rem" />,
];

const RandomIdx = array => {
  return Math.floor(Math.random() * array.length);
};
export default function RandomIcon() {
  const index = RandomIdx(array);
  return <Box mr={4}>{array[index]}</Box>;
}
