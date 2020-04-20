import React from 'react';

import GlobalStyle from './styles/global';

import Header from './components/Header';
import PokeList from './components/PokeList';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <PokeList />
    </>
  );
}

export default App;
