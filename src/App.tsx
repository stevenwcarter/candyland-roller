import { useState } from 'react';
import { Card, getCard, shuffle as cardShuffle } from './cards';
import { Flex, Box } from '@rebass/grid';
import styled from 'styled-components';

export const StyledTitle = styled.h1`
  text-align: center;
`;

export const GameContainer = styled(Flex)`
  flex-direction: column;
  height: 80vh;
`;

export const NewGameButton = styled.button`
  padding: 20px 30px 20px 30px;
`;

export const StyledButton = styled.button`
  margin: auto;
  background-color: #c89ba2;
  display: flex;
  flex: 1 1 auto;
  width: 100%;
`;

export const StyledCard = styled(Flex)`
  margin: auto;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

export const Symbol = styled.img`
  max-height: 100%;
  max-width: 100%;
`;

export const ColorBox = styled(Box)`
  height: 40%;
  aspect-ratio: 1 / 1;
  margin: 20px;
`;

function App() {
  const [card, setCard] = useState<Card>(getCard());

  const shuffle = () => {
    const newCard = cardShuffle();

    setCard(newCard);
  };

  const drawCard = () => {
    const newCard = getCard();

    setCard(newCard);
  };

  const renderCard = (currentCard: Card) => {
    const { count, color, symbol } = currentCard;

    if (symbol) {
      return <Symbol src={`${card.symbol}.jpg`} />;
    }

    if (count === 2) {
      return (
        <>
          <ColorBox style={{ backgroundColor: color }}>&nbsp;</ColorBox>
          <ColorBox style={{ backgroundColor: color }}>&nbsp;</ColorBox>
        </>
      );
    }

    return <ColorBox style={{ backgroundColor: color }}>&nbsp;</ColorBox>;
  };

  return (
    <GameContainer>
      <StyledTitle>Candyland Roller</StyledTitle>
      <NewGameButton onClick={shuffle}>New Game</NewGameButton>
      <StyledButton onClick={drawCard}>
        <StyledCard>{renderCard(card)}</StyledCard>
      </StyledButton>
    </GameContainer>
  );
}

export default App;
