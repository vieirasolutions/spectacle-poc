import React from 'react';


import { Box, BoxHeader, ColorViewer, Radio } from './styles.js';

const ColorRadio = function (props) {

  const { data, onSelect, colorSelected } = props;

  const {id, name, image} = data

  return (
    <Box
      onClick={() => onSelect(data)}
      colorSelected={colorSelected.id === id}
    >
      <BoxHeader>
        <span>{name}</span>
        <Radio
          type="radio"
          name="color"
          value={id}
          checked={colorSelected.id === id}
          onChange={() => onSelect(data)}
        />
      </BoxHeader>
      <ColorViewer image={image} />
    </Box>
  );
}
export default ColorRadio;