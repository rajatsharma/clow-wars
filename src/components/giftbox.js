/* eslint-disable react/prop-types, react/jsx-no-bind */
import React from 'react'
import imageDispatcher from '../utils/imagedispatcher'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

const GiftBox = ({title, bikes, cars, movieTickets, requiredToShow, titleClass}) =>
  <ReactCSSTransitionGroup className='above-all' transitionName='notifier' transitionEnterTimeout={1500} transitionLeaveTimeout={1500} transitionAppear>
    <div className='gifts'>
      <p className={titleClass}>{title}</p>
      {!!movieTickets && <div className='gift-card'>
        <img src={imageDispatcher['Movie Ticket']} height='50px' className='prize-icon' />
        <p className='prize-text'>Movie Tickets</p>
        <p className='prize-count'>{movieTickets}</p>
      </div>}
      {!!bikes && <div className='gift-card'>
        <img src={imageDispatcher.Bike} height='50px' className='prize-icon' />
        <p className='prize-text'>Bikes</p>
        <p className='prize-count'>{bikes}</p>
      </div>}
      {!!cars && <div className='gift-card'>
        <img src={imageDispatcher.Car} height='50px' className='prize-icon' />
        <p className='prize-text'>Car</p>
        <p className='prize-count'>{cars}</p>
      </div>}
    </div>
  </ReactCSSTransitionGroup>

export default GiftBox
