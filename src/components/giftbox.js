/* eslint-disable react/prop-types, react/jsx-no-bind */
import React from 'react'
import imageDispatcher from '../utils/imagedispatcher'

const GiftBox = ({title, bikes, mobiles, movieTickets, emptyText, titleClass}) =>
  <div className='gifts'>
    <p className={titleClass}>{title}</p>
    {!!movieTickets && <div className='gift-card'>
      <img src={imageDispatcher['Movie Ticket']} height='50px' className='prize-icon' />
      <p className='prize-text'>Movie Tickets</p>
      <p className='prize-count'>{movieTickets}</p>
    </div>}
    {!!mobiles && <div className='gift-card'>
      <img src={imageDispatcher.Mobile} height='50px' className='prize-icon mobile' />
      <p className='prize-text'>Mobiles</p>
      <p className='prize-count'>{mobiles}</p>
    </div>}
    {!!bikes && <div className='gift-card'>
      <img src={imageDispatcher.Bike} height='50px' className='prize-icon' />
      <p className='prize-text'>Bike</p>
      <p className='prize-count'>{bikes}</p>
    </div>}
    {!bikes && !movieTickets && !mobiles && <p className='intro-text'>{emptyText}</p>}
  </div>

export default GiftBox
