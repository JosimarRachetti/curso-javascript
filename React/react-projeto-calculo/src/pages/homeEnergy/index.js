import React from 'react';
import { Link } from 'react-router-dom';
import {
  Title,
  Paragrafo,
  Div,
  Container,
  DivGridr,
  Form,
  IconHome,
} from './styled';
import background from '../../image/eletricidade.jpeg';
import RenderBody from '../../components/renderBodyEnergy';
import imageIconHome from '../../image/icone_home.png';
// eslint-disable-next-line no-unused-vars

export default function Energy() {
  document.body.style.background = `url(${background})`;
  document.body.style.backgroundRepeat = 'no-repeat';
  document.body.style.backgroundSize = 'cover';

  return (
    <Container>
      <Title>Calculo de consumo</Title>
      <DivGridr>
        <Div>
          <Paragrafo>Eletricidade</Paragrafo>
        </Div>
        <Form>
          <h6>
            digite o consume de watts e os minutos de utilização do aparelho
          </h6>
        </Form>
      </DivGridr>
      <RenderBody opcaoSelecionada="opcao" />
      <Div>
        <Link to="/">
          <IconHome src={imageIconHome} alt="icone home" />
        </Link>
      </Div>
    </Container>
  );
}
