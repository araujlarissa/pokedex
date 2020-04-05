import styled from 'styled-components';

export const Background = styled.div`
  width: 400px;
  height: 80px;
  background-color: #8b0000;

  border-top-left-radius: 30px;
  -webkit-border-top-left-radius: 30px;
`;

export const ButtonContainer = styled.div`
  width: 201px;
  height: 85px;
  background-color: #8b0000;
  float: left;
  padding: 15px 0 0 15px;

  position: absolute;
  top: 0;
  left: 0;

  box-shadow: -10px 9px #5e0000;
  -webkit-box-shadow: -10px 9px #5e0000;

  border-bottom-right-radius: 85px 60px;
  -webkit-border-bottom-right-radius: 85px 60px;

  border-top-left-radius: 30px;
  -webkit-border-top-left-radius: 30px;

  div.btn {
    width: 60px;
    height: 60px;
    margin-right: 15px;
    border: 5px solid #fff;
    float: left;

    box-shadow: 0 0 10px #490000;
    -webkit-box-shadow: 0 0 10px #490000;

    background: radial-gradient(#05fbfb, #29abe3);
    background: -webkit-radial-gradient(#05fbfb, #29abe3);

    border-radius: 35px;
    -webkit-border-radius: 35px;
  }

  div.btn div.reflect {
    width: 30px;
    height: 18px;
    margin: 3px 0 0 15px;
    background: #fff;
    opacity: 0.6;

    border-radius: 15px 9px;
    -webkit-border-radius: 15px 9px;
  }
`;

export const Button = styled.div`
  width: 20px;
  height: 20px;
  margin-right: 10px;
  float: left;

  box-shadow: 0 0 10px #490000;
  -webkit-box-shadow: 0 0 10px #490000;

  border-radius: 20px;
  -webkit-border-radius: 20px;

  background: radial-gradient(
    ${(props) => props.grandient1},
    ${(props) => props.grandient2}
  );
  background: -webkit-radial-gradient(
    ${(props) => props.grandient1},
    ${(props) => props.grandient2}
  );
`;
