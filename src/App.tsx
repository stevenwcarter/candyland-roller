import { useState } from 'react';
import { Card, getCard, shuffle as cardShuffle } from './cards';
import { Flex } from '@rebass/grid';
import { PlayingCard } from './PlayingCard';
import styled from 'styled-components';

const StyledTitle = styled.h1`
  text-align: center;
`;

const GameContainer = styled(Flex)`
  flex-direction: column;
  height: 100vh;
`;

const NewGameButton = styled.button`
  padding: 20px 30px 20px 30px;
`;

const StyledButton = styled.button`
  margin: auto;
  background-color: #c89ba2;
  display: flex;
  flex: 1 1 auto;
  width: 100%;
`;

function App() {
  const [card, setCard] = useState<Card>(getCard());

  const shuffle = () => {
    setCard(cardShuffle());
  };

  const drawCard = () => {
    setCard(getCard());
  };

  return (
    <GameContainer>
      <StyledTitle>Candyland Roller</StyledTitle>
      <NewGameButton onClick={shuffle}>New Game</NewGameButton>
      <StyledButton onClick={drawCard}>
        <PlayingCard card={card} />
      </StyledButton>
    </GameContainer>
  );
}

export default App;
