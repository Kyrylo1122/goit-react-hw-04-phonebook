import { ImCross } from 'react-icons/im';
import { Exit } from './ExitBtn.styled';

export default function ExitBtn({ onClose }) {
  return (
    <Exit type="button" onClick={onClose}>
      <ImCross color="inherit" size="1.2rem" />
    </Exit>
  );
}
