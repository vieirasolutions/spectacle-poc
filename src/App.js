import React from 'react';
import { Box, Deck, FlexBox, FullScreen, Progress } from 'spectacle';

import theme from './theme';

import First from './pages/First';
import Second from './pages/Second';

const template = () => (
  <FlexBox
    justifyContent="space-between"
    position="absolute"
    bottom={0}
    width={1}
  >
    <Box padding="0 1em">
      <FullScreen />
    </Box>
    <Box padding="1em">
      <Progress />
    </Box>
  </FlexBox>
);

function App() {
  return (
    <>
    <Deck theme={theme} template={template}>
      <First />
      <Second />
    </Deck>
    </>
  );
}
export default App;