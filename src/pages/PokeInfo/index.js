/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import axios from 'axios';

import {
  CardItem,
  ThumbContainer,
  Thumb,
  IdPokemon,
  NamePokemon,
  TypePokemon,
} from './styles';

const PokeInfo = () => {
  const { id } = useParams();

  const [pokemon, setPokemon] = useState({
    id: 0,
    name: '',
    types: [],
    thumb: '',
    habilities: [],
    height: 0,
    weigth: 0,
    base_stats: [],
  });

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => {
        const { data } = response;

        setPokemon({
          id,
          name: data.name,
          types: data.types,
          thumb: `https://pokeres.bastionbot.org/images/pokemon/${data.id}.png`,
          habilities: data.abilities,
          height: data.height,
          weigth: data.weight,
          base_stats: data.stats,
        });
      })
      .catch((error) => {
        alert('Ocorreu um error ao carregar o pokemon ', error);
      });
  }, []);

  return (
    <CardItem to={pokemon.info}>
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
      <TypePokemon>
        Habilities:
        {pokemon.habilities.map((hab) => {
          if (!hab.is_hidden) return <li key={hab.slot}>{hab.ability.name}</li>;
        })}
      </TypePokemon>
      <span>{pokemon.height}</span>
      <span>{pokemon.weigth}</span>

      <TypePokemon>
        Base stats:
        {pokemon.base_stats.map((base) => (
          <li key={base.stat.name}>
            {base.stat.name} {base.base_stat}
          </li>
        ))}
      </TypePokemon>
    </CardItem>
  );
};

export default PokeInfo;
