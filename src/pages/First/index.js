import React from 'react';
import { Slide, Heading } from 'spectacle';

const First = function () {

  return (
    <Slide
      backgroundColor="primary.light"
      backgroundImage="url(https://instalartpeliculas.com.br/wp-content/uploads/2018/07/1.jpeg)"
      backgroundOpacity={0.5}
    >
      <Heading
        color='secondary.contrastText'
        fontSize='header'
        backgroundColor={`${'primary.main'}`}
        style={({
          position: 'fixed',
          top: 0,
          left: 0,
          margin: 0,
          width: '100%',
        })}
      >
        Proof of Concept - Palowa Presentation
      </Heading>
    </Slide>
  );
}
export default First;