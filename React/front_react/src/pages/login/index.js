import React from 'react';
import { Container } from '../../styles/styles-global';
import { Title, Paragrafo } from './styled';

export default function Login() {
  return (
    <Container>
      <Title>
        Login
        <small>subtitle</small>
      </Title>
      <Paragrafo>please do login with your email.</Paragrafo>
      <button type="button">Enviar</button>
    </Container>
  );
}
