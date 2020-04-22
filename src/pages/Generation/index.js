/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { Container, CardList } from './styles';

import PokeItem from '~/components/PokeItem';

const PokeList = () => {
  const { id } = useParams();

  const [pokemons, setPokemons] = useState([]);

  const chooseGeneration = async (generation_id) => {
    let limit = '';
    let offset = '';

    switch (generation_id) {
      case '1':
        limit = '10';
        offset = '0';
        break;

      case '2':
        limit = '20';
        offset = '10';
        break;

      case '3':
        limit = '30';
        offset = '10';
        break;

      default:
        limit = '10';
        offset = '0';
        break;
    }

    return [limit, offset];
  };

  const loadPokemons = async (limit, offset) => {
    await axios
      .get(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`)
      .then((response) => {
        setPokemons(response.data.results);
      })
      .catch((error) => {
        alert('Ocorreu um error ao carregar os pokemons ', error);
      });
  };

  useEffect(() => {
    chooseGeneration(id).then((generation) => {
      const [limit, offset] = generation;
      loadPokemons(limit, offset);
    });
  }, []);

  return (
    <Container>
      <CardList>
        {pokemons.map((pokemon) => (
          <PokeItem key={pokemon.name} url={pokemon.url} />
        ))}
      </CardList>
    </Container>
  );
};

export default PokeList;
