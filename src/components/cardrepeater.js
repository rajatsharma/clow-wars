/* eslint-disable react/prop-types, react/jsx-no-bind */
import React from 'react'
import { clowCover } from '../constants'

const CardRepeater = ({ rotate, clows }) => <div className='cards'>
  {clows.map((x, i) => <div className={`flipping-card ${x.flipped ? 'flip' : ''}`} onClick={(c) => rotate(c, i)} key={i}>
    <div className={`front hide ${x.flipped ? 'show' : ''}`}>
      <img src={clowCover} height='300px' width='150px' alt={'cover'} />
    </div>
    <div className={`back ${x.flipped ? 'hide' : ''}`}>
      <img src={x.img} height='300px' width='150px' alt={x.id} />
    </div>
  </div>)}
</div>

export default CardRepeater
