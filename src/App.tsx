import { useState } from 'react';
import { Card, getCard } from './cards';
import { Flex, Box } from '@rebass/grid';
import styled from 'styled-components';

export const StyledTitle = styled.h1`
  text-align: center;
`;

export const Container = styled.div`
  margin: auto;
`;

export const StyledButton = styled.button`
  margin: auto;
  background-color: #c89ba2;
`;

export const StyledCard = styled(Flex)`
  margin: auto;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  height: 80vh;
  width: 80vw;
`;

export const Symbol = styled.img`
  height: 100%;
`;

export const ColorBox = styled(Box)`
  height: 50%;
  aspect-ratio: 1 / 1;
  margin: 20px;
`;

function App() {
  const [card, setCard] = useState<Card>(getCard());

  const drawCard = () => {
    const newCard = getCard();

    setCard(newCard);
  };

  const renderCard = (currentCard: Card) => {
    const { count, color, symbol } = currentCard;

    if (symbol) {
      return (
        <StyledCard>
          <Symbol src={`${card.symbol}.jpg`} />
        </StyledCard>
      );
    }

    if (count === 2) {
      return (
        <StyledCard>
          <ColorBox style={{ backgroundColor: color }}>&nbsp;</ColorBox>
          <ColorBox style={{ backgroundColor: color }}>&nbsp;</ColorBox>
        </StyledCard>
      );
    }

    return (
      <StyledCard>
        <ColorBox style={{ backgroundColor: color }}>&nbsp;</ColorBox>
      </StyledCard>
    );
  };

  return (
    <>
      <StyledTitle>Candyland Roller</StyledTitle>
      <Container>
        <StyledButton onClick={drawCard}>{renderCard(card)}</StyledButton>
      </Container>
    </>
  );
}

export default App;
