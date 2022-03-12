import React, { useState } from 'react';
import PropTypes from 'prop-types';
import RenderResponse from '../renderResponseEnergy';
import { Div, Form } from './styled';

export default function RenderBody({ opcaoSelecionada }) {
  const [minutos, setMinutos] = useState(0);
  const [watts, setWatts] = useState(0);
  const [opcao, setOpcao] = useState('');
  const [renderForm, setRenderForm] = useState(false);

  const sendForm = (e) => {
    e.preventDefault();
    console.log('formulario recebido');
    console.log(minutos);
    setRenderForm(false);
  };

  if (opcaoSelecionada !== opcao) {
    setRenderForm(true);
    setOpcao(opcaoSelecionada);
  }

  return (
    <Div>
      <div>
        {renderForm ? (
          <Form onSubmit={sendForm}>
            <input
              type="number"
              name="watts"
              min="0"
              placeholder="quantidade de watts consumido"
              onChange={(e) => {
                setWatts(e.target.value);
              }}
            />
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
            consumoMedio={(watts / 1000) * (minutos / 60)}
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
