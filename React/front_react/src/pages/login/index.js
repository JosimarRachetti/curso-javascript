/* eslint-disable no-console */
import React from 'react';
import { useDispatch } from 'react-redux';
import { Container } from '../../styles/styles-global';
import { Title, Paragrafo } from './styled';
import * as exempleActions from '../../store/modules/example/actions';

export default function Login() {
  const dispatch = useDispatch();
  function handleClick(e) {
    e.preventDefault();

    dispatch(exempleActions.clicaBotaoRequest());
  }
  return (
    <Container>
      <Title>
        Login
        <small>subtitle</small>
      </Title>
      <Paragrafo>please do login with your email.</Paragrafo>
      <button type="button" onClick={handleClick}>
        Enviar
      </button>
    </Container>
  );
}
