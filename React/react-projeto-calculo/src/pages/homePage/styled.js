import styled from 'styled-components';
import { buttonColor } from '../../config/colors';

export const Container = styled.section`
  background: #fff;
  margin: 100px 200px;
  padding: 30px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 237, 93, 0.9);
  overflow: hidden;
  height: auto;
  width: auto;
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
  font-size: 20px;
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
  height: 150px;
  width: 150px;
  border-radius: 10px;
  cursor: pointer;
  :hover {
    box-shadow: 0 0 10px rgba(53, 240, 29, 1);
    height: 152px;
    width: 152px;
  }
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
  flex-direction: row;
`;
