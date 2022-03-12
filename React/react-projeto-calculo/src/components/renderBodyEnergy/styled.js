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
    border: 1px solid #8f40ff;
  }

  button {
    background-color: #8a05ff;
  }
`;

export const Paragrafo = styled.p`
  font-size: 30px;
  font-style: bold;
`;

export const IconHome = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 10px;
  cursor: pointer;
  :hover {
    box-shadow: 0 0 10px rgba(53, 240, 29, 1);
    height: 152px;
    width: 152px;
  }
`;
