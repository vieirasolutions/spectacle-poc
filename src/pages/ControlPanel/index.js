import React, { useState } from 'react';
import socketClient  from "socket.io-client";

import './index.scss';

import ColorRadio from '../../components/ColorRadio';

import { Container} from './styles'

const SERVER = "ws://localhost:3535/";

var socket = socketClient (SERVER);
socket.on('connection', () => {
    console.log(`I'm connected with the back-end`);
});

const ControlPanel = function () {

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
    socket.emit('color', color)
  }

  return (
    <Container>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
      }}>
        {listColors.map(c => (
            <ColorRadio
              key={c.id}
              data={c}
              onSelect={selectColor}
              colorSelected={color}
            />))}
      </div>
    </Container>
  );
}
export default ControlPanel;