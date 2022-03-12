import React, { useState } from 'react';
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
import background from '../../image/agua.jpeg';
import RenderBody from '../../components/renderBodyWater';
import imageIconHome from '../../image/icone_home.png';

// eslint-disable-next-line no-unused-vars

export default function Water() {
  const [opcao, setOpcao] = useState('select');
  document.body.style.background = `url(${background})`;
  document.body.style.backgroundRepeat = 'no-repeat';
  document.body.style.backgroundSize = 'cover';

  const changeBody = (e) => {
    const { value } = e.currentTarget;
    console.log(value);
    setOpcao(value);
    console.log(opcao);
  };

  return (
    <Container>
      <Title>Calculo de consumo</Title>
      <DivGridr>
        <Div>
          <Paragrafo>Agua</Paragrafo>
        </Div>
        <Form>
          <select onChange={changeBody}>
            <option value="select">Selecione uma opção</option>
            <option value="chuveiro">Chuveiro</option>
            <option value="torneira - banheiro">Torneira - banheiro</option>
            <option value="torneira - cozinha">Torneira - cozinha</option>
            <option value="mangueira">Mangueira</option>
          </select>
        </Form>
      </DivGridr>
      <RenderBody opcaoSelecionada={opcao} />
      <Div>
        <Link to="/">
          <IconHome src={imageIconHome} alt="icone home" />
        </Link>
      </Div>
    </Container>
  );
}
