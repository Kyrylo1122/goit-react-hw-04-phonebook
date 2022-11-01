import { Box } from 'components/Box/Box';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import './Footer.css';

export default function Footer() {
  return (
    <Box as="footer" pt={5}>
      <hr />
      <h2 className="footer__title">
        Made by <span>Kyrylo Bereznov</span>
      </h2>
      <ul className="footer__list">
        <li className="footer__item">
          <a
            className="footer__link"
            href="https://github.com/Kyrylo1122/goit-react-hw-04-phonebook"
          >
            <BsGithub size="2rem" />
          </a>
        </li>
        <li className="footer__item">
          <a
            className="footer__link"
            href="https://www.linkedin.com/in/kyrylo-bereznov-40b39818a/"
          >
            <BsLinkedin size="2rem" />
          </a>
        </li>
      </ul>
    </Box>
  );
}
