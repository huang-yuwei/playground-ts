import React from 'react';
import { GlobalStyle } from 'styles/global';
import { Pages } from './pages';

function App(): JSX.Element {
  return (
    <>
      <GlobalStyle />
      <Pages />
    </>
  );
}

export default App;
