import ArrRandomiser from './arrrandomiser'

export const setAllCardsToThis = index => cardsArray => {
  return cardsArray.map((x, i) => i !== index ? cardsArray[index] : x)
}

const pickRandomIndex = (length, i, j, k) => {
  if (i === -1) i = length - 1
  if (k === length) k = 0
  let ar = [i, j, k]
  console.log('Randomising from', ...ar)
  return ArrRandomiser(ar)[0]
}

export const setSomeCardsToThis = index => cardsArray => {
  let randomIndex = pickRandomIndex(cardsArray.length, index - 1, index, index + 1)
  return cardsArray.map((x, i) => i !== index ? cardsArray[randomIndex] : x)
}
