import React, { useState } from 'react';
import { Slide, Heading, FlexBox, Box } from 'spectacle';

import {
  CSSTransition,
  SwitchTransition,
} from 'react-transition-group';

import './index.scss';

import ColorRadio from '../../components/ColorRadio';

import { PreviewImage } from './styles'

const Second = function () {
  const [color, setColor] = useState('')

  const [listColors] = useState([
    {
      id: 'truffel-trend-arauco',
      name: 'Truffel Trend - Arauco',
      image: 'https://gmad.vtexassets.com/arquivos/ids/168379-800-auto',
      previewImage: 'https://gmad.vtexassets.com/arquivos/ids/168380-800-auto'
    },
    {
      id: 'branco-diamante-duratex',
      name: 'Branco Diamante Ultra - Duratex',
      image: 'https://gmad.vtexassets.com/arquivos/ids/169952-800-auto',
      previewImage: 'https://gmad.vtexassets.com/arquivos/ids/169953-800-auto'
    },
    {
      id: 'carvalho-nice-poro-berneck',
      name: 'Carvalho Nice - Poro Berneck',
      image: 'https://gmad.vtexassets.com/arquivos/ids/179325-800-auto',
      previewImage: 'https://gmad.vtexassets.com/arquivos/ids/179327-800-auto'
    },
    {
      id: 'elmo-dubai-guararapes',
      name: 'Elmo Dubai - Guararapes',
      image: 'https://gmad.vtexassets.com/arquivos/ids/168721-800-auto',
      previewImage: 'https://gmad.vtexassets.com/arquivos/ids/168722-800-auto',
    }
  ]);

  function selectColor(color) {
    setColor(color)
  }

  return (
    <Slide
      backgroundColor="primary.light"
    >
      <FlexBox flexDirection={`row`}>
        {listColors.map(c => (
            <ColorRadio
              key={c.id}
              data={c}
              onSelect={selectColor}
              colorSelected={color}
            />))}
      </FlexBox>

      {color && (
      <Box>
        <SwitchTransition>
          <CSSTransition
            key={color.id}
            addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
            classNames='fade'
          >
            <FlexBox alignContent={'center'} flexDirection={'column'}>
              <Heading color='primary.contrastText' fontSize='header' >{color.name}</Heading>
              <PreviewImage src={color.previewImage} />
            </FlexBox>
          </CSSTransition>
        </SwitchTransition>

      </Box>
      )}
    </Slide>
  );
}
export default Second;