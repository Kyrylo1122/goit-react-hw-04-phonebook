import styled from 'styled-components';

export const ActionItem = styled.li`
  list-style: none;
  :not(:last-child) {
    margin-right: ${p => p.theme.space[4]}px;
  }
`;
export const BtnDelete = styled.button`
  display: inline-flex;
  margin-left: auto;
  border-radius: ${p => p.theme.radii.normal};
  border: none;
  padding: ${p => p.theme.space[3]}px;
  background-color: ${p => p.theme.colors.grey};
  color: white;
  transition: transform 200ms ease-in-out;
  :hover,
  :focus {
    transform: scale(1.2);
  }
`;
export const TelLink = styled.a`
  display: flex;

  align-items: center;
  justify-content: center;
  background-color: ${p => p.theme.colors.primary};

  width: 40px;
  height: 40px;
  border-radius: 5px;
  color: white;
  transition: transform 200ms ease-in-out;
  :hover,
  :focus {
    transform: scale(1.2);
  }
`;
