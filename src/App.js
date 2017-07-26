/* eslint-disable react/jsx-no-bind */
import React, { Component } from 'react'
import MovieTicket from './statics/ticket.png'
import Bike from './statics/bike.png'
import Car from './statics/car.png'
import CardRepeater from './components/cardrepeater'
import ArrRandomiser from './utils/arrrandomiser'
import Clow from './utils/cardselector'
import delayer from './utils/delayer'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      cards: ArrRandomiser([...Clow])
    }
    let arrA = [1, 3, 4, 5, 6, 778]
    console.log(ArrRandomiser([...arrA]))
  }

  rotateCard (card, index) {
    let fake = this
    card.currentTarget.classList.toggle('flip')
    fake.setState({
      cards: fake.state.cards.map((x, i) => index === i ? Object.assign({}, x, {flipped: !x.flipped}) : x)
    })
    delayer(() => null)
  }

  render () {
    return (
      <div className='app'>
        <div className='gifts'>
          <p className='prizes-tobe-won'>Prizes to be won</p>
          <div className='gift-card'>
            <img src={MovieTicket} height='50px' className='prize-icon' />
            <p className='prize-text'>Movie Tickets</p>
            <p className='prize-count'>10</p>
          </div>
          <div className='gift-card'>
            <img src={Bike} height='50px' className='prize-icon' />
            <p className='prize-text'>Bikes</p>
            <p className='prize-count'>10</p>
          </div>
          <div className='gift-card'>
            <img src={Car} height='50px' className='prize-icon' />
            <p className='prize-text'>Car</p>
            <p className='prize-count'>10</p>
          </div>
        </div>
        <CardRepeater rotate={(card, index) => this.rotateCard(card, index)} clows={this.state.cards} />
        <div className='gifts'>
          <div className='gift-card'>
            <img src={MovieTicket} height='50px' className='prize-icon' />
            <p className='prize-text'>Movie Tickets</p>
            <p className='prize-count'>10</p>
          </div>
          <div className='gift-card'>
            <img src={Bike} height='50px' className='prize-icon' />
            <p className='prize-text'>Bikes</p>
            <p className='prize-count'>10</p>
          </div>
          <div className='gift-card'>
            <img src={Car} height='50px' className='prize-icon' />
            <p className='prize-text'>Car</p>
            <p className='prize-count'>10</p>
          </div>
          <p className='prizes-you-won'>You Won</p>
        </div>
      </div>
    )
  }
}

export default App
