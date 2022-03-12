import React from 'react';
import PropTypes from 'prop-types';
import responseImage from '../../image/lampada_desenho.png';

import { Div, Paragrafo, Image, SubParagrafo } from './styled';

export default function renderResponse({ minutos, consumoMedio }) {
  const totalConsumido = consumoMedio * 30;

  if (totalConsumido !== 0) {
    return (
      <Div>
        <Image src={responseImage} alt="Lampada desenhada" />
        <Paragrafo>
          {' '}
          Seu consumo foi de {Math.round(consumoMedio)} kWh em {minutos}, o que
          gera um custo {Math.round(totalConsumido)} r$.
        </Paragrafo>

        <SubParagrafo>
          Utilize o consumo de energia de forma conciente, deslige aparelhos da
          tomada quando não estiverem sendo utilizados
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
