/* eslint-disable react/jsx-no-bind */
import React, { Component } from 'react'
import CardRepeater from './components/cardrepeater'
import ArrRandomiser from './utils/arrrandomiser'
import Clow from './utils/cardselector'
import delayer from './utils/delayer'
import { setAllCardsToThis, setSomeCardsToThis } from './utils/cardshuffler' //eslint-disable-line
import { LostModal, PrizeModal, WinAllModal } from './components/modals'
import GiftBox from './components/giftbox'
import { initPrizeState } from './constants'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = Object.assign({}, {
      cards: ArrRandomiser([...Clow]),
      flippedId: null,
      lostGame: false,
      lastWonPrize: null,
      winAll: false
    }, initPrizeState)
  }

  loseGame () {
    this.setState({
      lostGame: true
    })
  }

  resetGame () {
    this.resetPrizes()
    this.resetCards()
  }

  resetPrizes () {
    this.setState(Object.assign({}, {
      flippedId: null,
      lostGame: false,
      lastWonPrize: null,
      winAll: false
    }, initPrizeState))
  }

  resetCards (card) {
    delayer(() => this.setState({
      cards: ArrRandomiser([...Clow]),
      flippedId: null
    }))
  }

  winAll () {
    this.setState({
      winAll: true
    })
  }

  dispatchPrize () {
    if (this.state.prizeTickets) {
      this.setState({
        prizeTickets: this.state.prizeTickets - 1,
        userTickets: this.state.userTickets + 1,
        lastWonPrize: 'Movie Ticket'
      })
      return
    }
    if (this.state.prizeBikes) {
      this.setState({
        prizeBikes: this.state.prizeBikes - 1,
        userBikes: this.state.userBikes + 1,
        lastWonPrize: 'Bike'
      })
      return
    }
    if (this.state.prizeCars) {
      this.setState({
        prizeCars: this.state.prizeCars - 1,
        userCars: this.state.userCars + 1,
        lastWonPrize: 'Cars'
      })
      return
    }
    this.winAll()
  }

  getFlippedCards () {
    return this.state.cards.filter(x => x.flipped).length
  }

  rotateCard (card, index) {
    if (this.state.cards[index].flipped) return
    let fake = this
    if (fake.getFlippedCards() > 1) {
      fake.resetCards(card)
      return
    }

    card.currentTarget.classList.toggle('flip')
    delayer(() => fake.setState({
      cards: fake.state.cards.map((x, i) => index === i ? Object.assign({}, x, {flipped: true}) : x)
    }))

    if (this.state.flippedId) {
      this.state.cards[index].id === this.state.flippedId ? this.dispatchPrize() : this.loseGame()
      return
    }

    // card Setting here
    this.setState({
      flippedId: this.state.cards[index].id,
      cards: setSomeCardsToThis(index)(this.state.cards)
    })
  }

  loseLostModal () {
    this.resetGame()
  }

  closePrizeModal () {
    this.setState({
      lastWonPrize: null
    })
    this.resetCards()
  }

  render () {
    return (
      <div className='app'>
        <LostModal isShown={this.state.lostGame} closeModal={() => this.loseLostModal()} />
        <WinAllModal isShown={this.state.winAll} closeModal={() => this.resetGame()} />
        <PrizeModal isShown={!!this.state.lastWonPrize} closeModal={() => this.closePrizeModal()} prize={this.state.lastWonPrize} />
        <GiftBox title='Prizes to be won' cars={this.state.prizeCars} bikes={this.state.prizeBikes} movieTickets={this.state.prizeTickets} titleClass='prizes-tobe-won' />
        <CardRepeater rotate={(card, index) => this.rotateCard(card, index)} clows={this.state.cards} />
        <GiftBox title='You Won' cars={this.state.userCars} bikes={this.state.userBikes} movieTickets={this.state.userTickets} requiredToShow titleClass='prizes-you-won' />
      </div>
    )
  }
}

export default App
