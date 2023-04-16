export interface Card {
  color?: string;
  count: number;
  symbol?: string;
}

const colors = ['red', 'yellow', 'green', 'blue', 'purple', 'orange'];
const symbols = ['lollipop', 'cone', 'peppermint', 'gumdrop', 'fudge'];

const shuffleArray = (array: Card[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [array[i], array[j]] = [array[j], array[i]];
  }
};

export const initCards = (): Card[] => {
  const cards: Card[] = [];

  colors.forEach((color) => {
    for (let i = 0; i < 4; i++) {
      cards.push({ color, count: 1 });
    }

    for (let i = 0; i < 3; i++) {
      cards.push({ color, count: 2 });
    }
  });

  symbols.forEach((symbol) => {
    cards.push({ symbol, count: 1 });
  });

  shuffleArray(cards);

  return cards;
};

let gameCards: Card[] = initCards();

export const getCard = (): Card => {
  if (gameCards.length === 0) {
    gameCards = initCards();
  }

  return gameCards.pop() as Card;
};
