import styled, { createGlobalStyle } from 'styled-components';
import { primaryDarkColor, buttonColor, successColor } from '../config/colors';
import 'react-toastify/dist/ReactToastify.css';
import background from '../image/floresta.jpeg';

export default createGlobalStyle`
 *{
   margin: 0;
   padding: 0;
   outline: none;
   box-sizing: border-box;
 }

 body{
   font-family: sans-serif;
   background-image: url(${background});
   background-repeat: no-repeat;
   background-size: cover;
   overflow: hidden;
   //background: ${primaryDarkColor};
 }

 html, body, #root {
   height: 100%;}

 button {
   cursor: pointer;
   background-color: ${buttonColor};
   border: none;
   color: #fff;
   padding: 10px;
   border-radius: 4px;
 }

 a {
   text-decoration: none;
 }

 ul {
   list-style: none;
 }

body .Toastify .Toastify__toast-container .Toastify__toast--success{
  background: ${successColor}
}
`;

export const Container = styled.section`
  max-width: 360px;
  background: #fff;
  margin: 100px auto;
  padding: 30px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 237, 93, 0.9);
`;
