export const setAllCardsToThis = (index: number) => (cardsArray: any[]) => {
  return cardsArray.map((x: any, i: any) =>
    i !== index ? cardsArray[index] : x,
  );
};

const pickRandomIndex = (length: number, i: number, j: any, k: number) => {
  if (i === -1) i = length - 1;
  if (k === length) k = 0;
  const ar = [i, j, k];
  console.log("Randomising from", ...ar);
  return randomizer(ar)[0];
};

export const setSomeCardsToThis = (index: number) => (cardsArray: any[]) => {
  const randomIndex = pickRandomIndex(
    cardsArray.length,
    index - 1,
    index,
    index + 1,
  );

  return cardsArray.map((x, i) => (i !== index ? cardsArray[randomIndex] : x));
};

export function randomizer<T>(array: T[]): T[] {
  let currentIndex = array.length;
  let temporaryValue;
  let randomIndex = 0;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
