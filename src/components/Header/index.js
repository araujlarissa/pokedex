import React from 'react';

import { Background, ButtonContainer, Button } from './styles';

const Header = () => (
  <>
    <Background />
    <ButtonContainer>
      <div className="btn">
        <div className="reflect"> </div>
      </div>
      <Button grandient1="#fb7b7b" grandient2="#fb0505" />
      <Button grandient1="#fbfb9b" grandient2="#fbfb05" />
      <Button grandient1="#b0fb7b" grandient2="#50fb05" />
    </ButtonContainer>
  </>
);

export default Header;
