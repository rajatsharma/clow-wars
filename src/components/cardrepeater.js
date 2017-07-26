/* eslint-disable react/prop-types, react/jsx-no-bind */
import React from 'react'
import { clowCover } from '../constants'

const CardRepeater = ({ rotate, clows }) => <div className='cards'>
  {clows.map((x, i) => <div className={`flipping-card ${x.flipped ? 'flip' : ''}`} onClick={(c) => rotate(c, i)}>
    <div className={`front hide ${x.flipped ? 'show' : ''}`}>
      <img src={x.img} height='300px' />
    </div>
    <div className={`back ${x.flipped ? 'hide' : ''}`}>
      <img src={clowCover} height='300px' />
    </div>
  </div>)}
</div>

export default CardRepeater
