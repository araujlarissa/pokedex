import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Container, CardList } from './styles';

import PokeItem from '~/components/PokeItem';
import NavGeneration from '~/components/NavGeneration';

const PokeList = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/?limit=10&offset=0`)
      .then((response) => {
        setPokemons(response.data.results);
      })
      .catch((error) => {
        alert('Ocorreu um error ao carregar os pokemons ', error);
      });
  }, []);

  return (
    <Container>
      <NavGeneration />
      <CardList>
        {pokemons.map((pokemon) => (
          <PokeItem key={pokemon.name} url={pokemon.url} />
        ))}
      </CardList>
    </Container>
  );
};

export default PokeList;
