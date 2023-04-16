import { useState } from 'react';
import { Card, getCard } from './cards';
import { Flex, Box } from '@rebass/grid';
import styled from 'styled-components';

export const StyledCard = styled(Flex)`
  height: 80vh;
  width: 80vh;
`;

export const ColorBox = styled(Box)`
  height: 40vh;
  width: 40vh;
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
          <img src={card.symbol} />
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
      <h1>Candyland Roller</h1>
      <div className="card">
        <button onClick={drawCard}>
          {renderCard(card)}
          card is {card.color} - {card.count} - {card.symbol}
        </button>
      </div>
    </>
  );
}

export default App;
