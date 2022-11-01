import ContactForm from 'components/ContactForm/Contactform';
import ExitBtn from 'components/ExitBtn/ExitBtn';
import { useEffect } from 'react';
import { Backdrop, ExitBtnContainer, ModalContainer } from './Modal.styled';

export default function Modal({ onSubmitForm, closeModal }) {
  useEffect(() => {
    const Escape = e => {
      if (e.code === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', Escape);
    return () => window.removeEventListener('keydown', Escape);
  }, [closeModal]);
  const handleClick = e => {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  };
  return (
    <Backdrop onClick={handleClick}>
      <ModalContainer>
        <ExitBtnContainer>
          <ExitBtn onClose={closeModal} />
        </ExitBtnContainer>
        <ContactForm onSubmitForm={onSubmitForm} closeModal={closeModal} />
      </ModalContainer>
    </Backdrop>
  );
}
