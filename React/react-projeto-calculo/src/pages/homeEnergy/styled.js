import styled from 'styled-components';
import { buttonColor } from '../../config/colors';

export const Container = styled.section`
  background: #fff;
  margin: 50px auto;
  padding: 30px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(255, 255, 219, 1);
  overflow: hidden;
  height: auto;
  width: 600px;
`;

export const Title = styled.h1`
  text-align: center;
  display: flex;
  flex-direction: column;
  small {
    font-size: 12px;
    padding-left: 10px;
  }
`;

export const Paragrafo = styled.p`
  font-size: 30px;
  font-style: bold;
`;

export const Button = styled.button`
  cursor: pointer;
  align-items: center;
  justify-content: center;
  background-color: ${buttonColor};
  border: none;
  color: #fff;
  padding: 10px;
  border-radius: 4px;
`;

export const Image = styled.img`
  height: 200px;
  width: 200px;
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;

export const DivGridr = styled.div`
  display: flex;
  padding: 10px;
  justify-content: center;
  flex-direction: column;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  h6 {
    text-align: center;
  }
`;

export const IconHome = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 10px;
  cursor: pointer;
  :hover {
    box-shadow: 0 0 10px rgba(99, 33, 99, 1);
    height: 50px;
    width: 50px;
  }
`;
