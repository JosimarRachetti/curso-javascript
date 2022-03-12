import React, { useState } from 'react';
import PropTypes from 'prop-types';
import RenderResponse from '../renderResponseWater';
import { Div, Form } from './styled';

export default function RenderBody({ opcaoSelecionada }) {
  const [minutos, setMinutos] = useState(0);
  const [opcao, setOpcao] = useState('');
  const [renderForm, setRenderForm] = useState(false);
  const qtdConsumoMinuto = {
    chuveiro: 3,
    ducha: 9,
    'torneira - cozinha': 7.8,
    'torneira - banheiro': 2.4,
    mangueira: 18.6,
  };
  const sendForm = (e) => {
    e.preventDefault();
    console.log('formulario recebido');
    console.log(minutos);
    console.log(qtdConsumoMinuto[opcaoSelecionada]);
    setRenderForm(false);
  };

  if (opcaoSelecionada !== opcao) {
    setRenderForm(true);
    setOpcao(opcaoSelecionada);
  }

  if (opcaoSelecionada === 'select') {
    return <> </>;
  }

  return (
    <Div>
      <div>
        {renderForm ? (
          <Form onSubmit={sendForm}>
            <input
              type="number"
              name="minutos"
              min="0"
              placeholder="quantidade de minutos"
              onChange={(e) => {
                setMinutos(e.target.value);
              }}
            />

            <button type="submit">Calcular</button>
          </Form>
        ) : (
          <RenderResponse
            minutos={minutos}
            consumoMedio={qtdConsumoMinuto[opcaoSelecionada]}
          />
        )}
      </div>
    </Div>
  );
}

RenderBody.defaultProps = {
  opcaoSelecionada: 'select',
};

RenderBody.propTypes = {
  opcaoSelecionada: PropTypes.string,
};
