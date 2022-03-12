/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { FaHome, FaUserAlt, FaSignInAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Nav } from './styled';

export default function Headers() {
  const botaoClicado = useSelector(
    (state) => state.exemploReducer.botaoClicado
  );
  return (
    <Nav>
      <Link to="/">
        <FaHome size={24} />
      </Link>
      <Link to="/login">
        <FaUserAlt size={24} />
      </Link>
      <Link to="/logout">
        <FaSignInAlt size={24} />
      </Link>
      {botaoClicado ? 'clicado' : 'Nao clicado'}
    </Nav>
  );
}
