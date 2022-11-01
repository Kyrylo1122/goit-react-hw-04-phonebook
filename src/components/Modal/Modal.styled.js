import styled from 'styled-components';

export const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${p => p.theme.colors.backdrop};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
`;
export const ModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
  width: 50%;
  height: 50%;
  background-color: white;

  border-radius: 5px;
`;

export const ExitBtnContainer = styled.div`
  position: absolute;
  top: 5%;
  right: 5%;
`;
