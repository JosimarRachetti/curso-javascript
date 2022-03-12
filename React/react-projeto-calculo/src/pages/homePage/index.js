import React from 'react';
import { Link } from 'react-router-dom';
import { get } from 'lodash';
import { Title, Paragrafo, Image, Div, Container, DivGridr } from './styled';

import background from '../../image/floresta.jpeg';
import eletricidade from '../../image/eletricidade.jpeg';
import agua from '../../image/agua.jpeg';

export default function Login(props) {
  document.body.style.background = `url(${background})`;
  document.body.style.backgroundRepeat = 'no-repeat';
  document.body.style.backgroundSize = 'cover';
  const history = get(props, 'history');
  console.log(history);

  return (
    <Container>
      <Title>
        Calculo de consumo
        <small>Escolha uma opção para realizar o calculo</small>
      </Title>
      <DivGridr>
        <Div>
          <Link to="/water">
            <Image src={agua} alt="agua" />
          </Link>
          <Paragrafo>Agua</Paragrafo>
        </Div>
        <Div>
          <Link to="/energy">
            <Image src={eletricidade} alt="eletricidade" />
          </Link>
          <Paragrafo>Eletricidade</Paragrafo>
        </Div>
      </DivGridr>
    </Container>
  );
}
