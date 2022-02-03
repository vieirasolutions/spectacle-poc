import React, { useEffect, useState } from 'react';
import { Slide } from 'spectacle';

import socketClient  from "socket.io-client";

import './index.scss';

import {
  CSSTransition,
  SwitchTransition,
} from 'react-transition-group';

const SERVER = "ws://localhost:3535/";

var socket = socketClient (SERVER);
socket.on('connection', () => {
    console.log(`I'm connected with the back-end`);
});

const Second = function () {

  const [color, setColor] = useState("");

  useEffect(() => {
    const socket = socketClient(SERVER);
    socket.on("ColorSelected", data => {
      setColor(data);
    });
  }, []);

  return (
    <Slide
      backgroundColor="primary.light"
    >
      <SwitchTransition>
          <CSSTransition
            key={color.id}
            addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
            classNames='fade'
          >
            <div
              style={{
                width: '100%',
                height: '90%',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <img
                alt="teste"
                src={color.previewImage}
                style={{
                  height: '100%',
                  borderRadius: '10px',
                  boxShadow: '0px 0px 10px rgba(0,0,0,0.5)'
                }}
              >
              </img>
            </div>
          </CSSTransition>
        </SwitchTransition>
    </Slide>
  );
}
export default Second;