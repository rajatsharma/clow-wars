import React, { useState } from "react";
import { initPrizeState } from "./constants";
import { randomizer } from "./utils/arrrandomiser";
import clowCards from "./utils/cardselector";
import { setSomeCardsToThis } from "./utils/cardshuffler";
import { LostModal, PrizeModal, WinAllModal } from "./components/modals";
import GiftBox from "./components/GitftBox";
import CardRepeater from "./components/CardRepeater";

export function App() {
  const [prizeState, setPrizeState] =
    useState<typeof initPrizeState>(initPrizeState);
  const [cards, setCards] = useState<typeof clowCards>(randomizer(clowCards));
  const [flipped, setFlipped] = useState<number | null>(null);
  const [gameLost, setGameLost] = useState<boolean>(false);
  const [lastPrizeWon, setLastPrizeWon] = useState<string | null>(null);
  const [gameWon, setGameWon] = useState<boolean>(false);
  const [nearlyFlippedCard, setNearlyFlippedCard] = useState<number | null>(
    null,
  );

  const loseGame = () => {
    setGameLost(true);
  };

  const resetPrizes = () => {
    setFlipped(null);
    setGameLost(false);
    setGameWon(false);
    setLastPrizeWon(null);
    setCards(randomizer(clowCards));
    setPrizeState(initPrizeState);
  };

  const resetCards = () => {
    setCards(randomizer(cards));
    setFlipped(null);
    setNearlyFlippedCard(null);
  };

  const win = () => {
    setGameWon(true);
  };

  const dispatchPrize = () => {
    if (prizeState.prizeTickets > 0) {
      setPrizeState({
        ...prizeState,
        prizeTickets: prizeState.prizeTickets - 1,
        userTickets: prizeState.userTickets + 1,
      });
      setLastPrizeWon("Movie Ticket");
      return;
    }

    if (prizeState.prizeMobiles > 0) {
      setPrizeState({
        ...prizeState,
        prizeMobiles: prizeState.prizeMobiles - 1,
        userMobiles: prizeState.userMobiles + 1,
      });
      setLastPrizeWon("Mobile");
      return;
    }

    if (prizeState.prizeBikes > 0) {
      setPrizeState({
        ...prizeState,
        prizeBikes: prizeState.prizeBikes - 1,
        userBikes: prizeState.userBikes + 1,
      });
      setLastPrizeWon("Bike");
      return;
    }

    win();
  };

  const getFlippedCards = () => {
    return cards.filter((card) => card.flipped).length;
  };

  const rotateCard = (
    card: { currentTarget: { classList: { toggle: (arg0: string) => void } } },
    index: number,
  ) => {
    if (nearlyFlippedCard === index) return;

    if (getFlippedCards() > 1) {
      return resetCards();
    }

    card.currentTarget.classList.toggle("flip");

    setCards(
      cards.map((card, i) => {
        if (index === i) return { ...card, flipped: true };
        return card;
      }),
    );

    if (flipped !== null) {
      if (cards[index].id === flipped) return dispatchPrize();
      return loseGame();
    }

    setNearlyFlippedCard(index);
    setFlipped(cards[index].id);
    setCards(setSomeCardsToThis(index)(cards));
  };

  const closeLostModal = () => {
    resetCards();
    resetPrizes();
  };

  const closePrizeModal = () => {
    setLastPrizeWon(null);
    resetCards();
  };

  const resetGame = () => {
    resetCards();
    resetPrizes();
  };

  return (
    <div className="app">
      <LostModal isShown={gameLost} closeModal={() => closeLostModal()} />
      <WinAllModal isShown={gameWon} closeModal={() => resetGame()} />
      <PrizeModal
        isShown={lastPrizeWon !== null}
        closeModal={() => closePrizeModal()}
        prize={lastPrizeWon}
      />
      <GiftBox
        title="Prizes to be won"
        bikes={prizeState.prizeBikes}
        mobiles={prizeState.prizeMobiles}
        movieTickets={prizeState.prizeTickets}
        titleClass="prizes-tobe-won"
        emptyText={"We Ran out of Prizes"}
      />
      <CardRepeater
        rotate={(
          card: {
            currentTarget: {
              classList: {
                toggle: (arg0: string) => void;
              };
            };
          },
          index: number,
        ) => rotateCard(card, index)}
        clows={cards}
      />
      <GiftBox
        title="You Won"
        bikes={prizeState.userBikes}
        mobiles={prizeState.userMobiles}
        movieTickets={prizeState.userTickets}
        titleClass="prizes-you-won"
        emptyText={"Start Flipping Cards, if it matches you'll get a prize"}
      />
    </div>
  );
}
