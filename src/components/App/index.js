import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import Routes from '../../Routes';

import defaultTheme from '../../theme';



const App = function () {

  return (
    <ThemeProvider theme={defaultTheme}>

      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
