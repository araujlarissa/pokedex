/* eslint-disable no-console */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { makeStyles } from '@material-ui/core/styles';
import { Pagination } from '@material-ui/lab';

import { Container, Nav, NavItem, CardList } from './styles';

import PokeItem from '~/components/PokeItem';

const GENERATIONS = [
  {
    name: 'First',
    offset: 0,
  },
  {
    name: 'Second',
    offset: 151,
  },
  {
    name: 'Thirth',
    offset: 251,
  },
  {
    name: 'Fourth',
    offset: 386,
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const PokeList = () => {
  const classes = useStyles();

  const [pokemons, setPokemons] = useState([]);

  const [page, setPage] = useState(0);
  const [offset, setOffset] = useState(0);

  const [generation, setGeneration] = useState('');

  const handlePageChange = (event, value) => {
    const limit = 20;
    let off = 0;

    if (value === 1) {
      setOffset(0);
    } else {
      off = limit * (value - 1);
      setOffset(off);
    }

    setPage(value);
  };

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=20`)
      .then((response) => {
        GENERATIONS.map((gen) => {
          if (gen.name === generation) setOffset(gen.offset);
        });

        setPokemons(response.data.results);
      })
      .catch((error) => {
        alert('Ocorreu um error ao carregar os pokemons ', error);
      });
  }, [offset, generation]);

  return (
    <Container>
      <Nav>
        {GENERATIONS.map((gen) => (
          <NavItem key={gen.offset} onClick={() => setGeneration(gen.name)}>
            {gen.name} Generation
          </NavItem>
        ))}
      </Nav>

      <CardList>
        {pokemons.map((pokemon) => (
          <PokeItem key={pokemon.name} url={pokemon.url} />
        ))}
      </CardList>

      <div className={classes.root}>
        <Pagination
          count={49}
          variant="outlined"
          page={page}
          onChange={handlePageChange}
        />
      </div>
    </Container>
  );
};

export default PokeList;
