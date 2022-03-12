import styled from 'styled-components';

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  input {
    margin-bottom: 20px;
    height: 40px;
    padding: 0 10px;
    border-radius: 4px;
    border: 1px solid #1cd6ca;
  }

  button {
    background-color: #2bc4eb;
  }
`;

export const Paragrafo = styled.p`
  font-size: 30px;
  font-style: bold;
`;
