import { randomizer } from "./arrrandomiser";

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
  return cardsArray.map((x: any, i: any) =>
    i !== index ? cardsArray[randomIndex] : x,
  );
};
