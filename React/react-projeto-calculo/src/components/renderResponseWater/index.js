import React from 'react';
import PropTypes from 'prop-types';
import responseImage from '../../image/agua_desenho.jpeg';

import { Div, Paragrafo, Image, SubParagrafo } from './styled';

export default function renderResponse({ minutos, consumoMedio }) {
  const totalConsumido = minutos * consumoMedio;

  if (totalConsumido !== 0) {
    return (
      <Div>
        <Image
          src={responseImage}
          alt="agua saindo da terra por uma torneira"
        />
        <Paragrafo>
          {' '}
          Em {minutos} minutos seu total de consumo foi{' '}
          {Math.round(totalConsumido)} litros.
        </Paragrafo>

        {minutos > 5 ? (
          <Div> Você utilizou mais do que o recomendado</Div>
        ) : (
          <Div> Você usou de forma consciente</Div>
        )}
        <SubParagrafo>
          O recomendado pelo{' '}
          <a href="https://www.demae.go.gov.br/projetos/consumo-de-agua/">
            {' '}
            demae{' '}
          </a>
          é cinco minutos
        </SubParagrafo>
      </Div>
    );
  }

  return <> </>;
}

renderResponse.defaultProps = {
  testeOpcao: 'valor',
};

renderResponse.propTypes = {
  testeOpcao: PropTypes.string,
};
