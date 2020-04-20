/* eslint-disable no-console */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import {
  CardItem,
  ThumbContainer,
  Thumb,
  IdPokemon,
  NamePokemon,
  TypePokemon,
} from './styles';

const Card = ({ url }) => {
  const [pokemon, setPokemon] = useState({
    id: 0,
    name: '',
    types: [],
    thumb: '',
  });

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        const { data } = response;

        setPokemon({
          id: data.id,
          name: data.name,
          types: data.types,
          thumb: `https://pokeres.bastionbot.org/images/pokemon/${data.id}.png`,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <CardItem>
      <ThumbContainer>
        <Thumb src={pokemon.thumb} alt="bulbasaur" />
      </ThumbContainer>
      <IdPokemon>#00{pokemon.id}</IdPokemon>
      <NamePokemon>{pokemon.name}</NamePokemon>
      <TypePokemon>
        Type:
        {pokemon.types.map((t) => (
          <li key={t.slot}>{t.type.name}</li>
        ))}
      </TypePokemon>
    </CardItem>
  );
};

export default Card;
