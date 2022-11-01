import styled from 'styled-components';

export const Exit = styled.button`
  padding: ${p => p.theme.space[3]}px;
  background-color: transparent;
  color: black;
  border: none;
  transition: transform 200ms linear;
  border-radius: 50%;
  :hover,
  :focus {
    transform: scale(1.2);
    background-color: transparent;
    color: ${p => p.theme.colors.primary};
  }
`;
