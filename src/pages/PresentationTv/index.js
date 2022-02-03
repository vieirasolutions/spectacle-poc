import React from 'react';
import { Box, Deck, FlexBox, FullScreen } from 'spectacle';

import theme from '../../theme';

import Second from './slides/Second';

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
  </FlexBox>
);

function PresentationTv() {
  return (
    <>
    <Deck theme={theme} template={template}>
      <Second />
    </Deck>
    </>
  );
}
export default PresentationTv;