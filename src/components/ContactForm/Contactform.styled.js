import styled from 'styled-components';
import { Form, Field } from 'formik';

export const FormikForm = styled(Form)`
  padding: ${p => p.theme.space[4]}px;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70%;
  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;
export const FormikField = styled(Field)`
  padding: ${p => p.theme.space[3]}px;
  margin-bottom: ${p => p.theme.space[4]}px;
`;
export const ErrorText = styled.p`
  margin-bottom: ${p => p.theme.space[3]}px;

  color: red;
  font-size: ${p => p.theme.fontSizes.xs};
  font-style: italic;
`;
export const ButtonSubmit = styled.button`
  width: 50%;
`;
