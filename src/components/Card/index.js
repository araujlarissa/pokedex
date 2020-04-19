/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import {
  Container,
  CardList,
  CardItem,
  ThumbContainer,
  Thumb,
  IdPokemon,
  NamePokemon,
  TypePokemon,
} from './styles';

const Card = () => (
  <Container>
    <CardList>
      <CardItem>
        <ThumbContainer>
          <Thumb
            src="https://pokeres.bastionbot.org/images/pokemon/1.png"
            alt="bulbasaur"
          />
        </ThumbContainer>
        <IdPokemon>#001</IdPokemon>
        <NamePokemon>Bulbasaur</NamePokemon>
        <TypePokemon>Type: grass</TypePokemon>
      </CardItem>

      <CardItem>
        <ThumbContainer>
          <Thumb
            src="https://pokeres.bastionbot.org/images/pokemon/1.png"
            alt="bulbasaur"
          />
        </ThumbContainer>
        <IdPokemon>#001</IdPokemon>
        <NamePokemon>Bulbasaur</NamePokemon>
        <TypePokemon>Type: grass</TypePokemon>
      </CardItem>

      <CardItem>
        <ThumbContainer>
          <Thumb
            src="https://pokeres.bastionbot.org/images/pokemon/1.png"
            alt="bulbasaur"
          />
        </ThumbContainer>
        <IdPokemon>#001</IdPokemon>
        <NamePokemon>Bulbasaur</NamePokemon>
        <TypePokemon>Type: grass</TypePokemon>
      </CardItem>

      <CardItem>
        <ThumbContainer>
          <Thumb
            src="https://pokeres.bastionbot.org/images/pokemon/1.png"
            alt="bulbasaur"
          />
        </ThumbContainer>
        <IdPokemon>#001</IdPokemon>
        <NamePokemon>Bulbasaur</NamePokemon>
        <TypePokemon>Type: grass</TypePokemon>
      </CardItem>

      <CardItem>
        <ThumbContainer>
          <Thumb
            src="https://pokeres.bastionbot.org/images/pokemon/1.png"
            alt="bulbasaur"
          />
        </ThumbContainer>
        <IdPokemon>#001</IdPokemon>
        <NamePokemon>Bulbasaur</NamePokemon>
        <TypePokemon>Type: grass</TypePokemon>
      </CardItem>

      <CardItem>
        <ThumbContainer>
          <Thumb
            src="https://pokeres.bastionbot.org/images/pokemon/1.png"
            alt="bulbasaur"
          />
        </ThumbContainer>
        <IdPokemon>#001</IdPokemon>
        <NamePokemon>Bulbasaur</NamePokemon>
        <TypePokemon>Type: grass</TypePokemon>
      </CardItem>
    </CardList>
  </Container>
);

export default Card;
