import { Card } from './cards';
import { Flex, Box } from '@rebass/grid';
import styled from 'styled-components';

const ColorBox = styled(Box)`
  height: 40%;
  aspect-ratio: 1 / 1;
  margin: 20px;
`;

const StyledCard = styled(Flex)`
  margin: auto;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

interface PlayingCardProps {
  card: Card;
}

export const PlayingCard = (props: PlayingCardProps) => {
  const { count, color, symbol } = props.card;

  if (symbol) {
    return (
      <StyledCard>
        <img style={{ maxHeight: '100%', width: '100%' }} src={`/${symbol}.jpg`} alt={symbol} />
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
