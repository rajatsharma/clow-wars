import React, { Component } from 'react'
import Clow from './utils/cardselector'

const Bicycle = 'https://vignette2.wikia.nocookie.net/ccs/images/7/7b/CCS_Clow_Card.jpg/revision/latest?cb=20160404141804'
class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      cards: [0, 1, 2, 3, 4, 5, 6, 7]
    }
  }
  render () {
    return (
      <div className='app'>
        <div className='gifts'>
          <div className='gift-card'>10 Movie Tickets</div>
          <div className='gift-card'>3 Bikes</div>
          <div className='gift-card'>1 Car</div>
        </div>
        <div className='cards'>
          {Clow.map(x => <div className='container'>
            <div className='flipping-card'>
              <div className='face front'>
                <img src={x.img} height='300px' />
              </div>
              <div className='face back'>
                <img src={Bicycle} height='300px' />
              </div>
            </div>
          </div>)}
        </div>
        <div className='gifts'>
          <div className='gift-card'>10 Movie Tickets</div>
          <div className='gift-card'>3 Bikes</div>
          <div className='gift-card'>1 Car</div>
        </div>
      </div>
    )
  }
}

export default App
