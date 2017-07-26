/* eslint-disable react/prop-types, react/jsx-no-bind */
import React from 'react'

const CwazyButtons = ({text, style, onClick}) => <button className='cwazy-button' onClick={() => onClick()}>
  {text}
</button>

export default CwazyButtons
