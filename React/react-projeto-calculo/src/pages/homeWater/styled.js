import styled from 'styled-components';
import { buttonColor } from '../../config/colors';
import backgroundIcon from '../../image/gota_dagua.jpeg';

export const Container = styled.section`
  background: #fff;
  margin: 50px auto;
  padding: 30px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(21, 196, 219, 1);
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
  select {
    cursor: pointer;
    border-style: solid;
    border-color: #ddd;
    background-image: url(${backgroundIcon});
    appearance: none;
    border-radius: 4px;
    height: 30px;
    background-position: center right;
    background-repeat: no-repeat;
    background-size: 30px;
    background-color: white;
    &:focus {
      background-color: white;
      border-color: #1c80d6;
      border-radius: 4px;
      height: 30px;
      appearance: none;
    }
  }
`;

export const IconHome = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 10px;
  cursor: pointer;
  :hover {
    box-shadow: 0 0 10px rgba(0, 255, 255, 1);
    height: 50px;
    width: 50px;
  }
`;
