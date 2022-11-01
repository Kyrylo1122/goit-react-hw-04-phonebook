import styled from 'styled-components';

export const ContactItem = styled.li`
  display: flex;
  align-items: center;
  padding: ${p => p.theme.space[4]}px;

  :nth-child(even) {
    background-color: ${p => p.theme.colors.first};
  }
`;
