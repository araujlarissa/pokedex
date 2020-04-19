import React from 'react';

import GlobalStyle from './styles/global';

import Header from './components/Header';
import Card from './components/Card';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Card />
    </>
  );
}

export default App;
