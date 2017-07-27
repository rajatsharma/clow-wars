/* eslint-disable react/prop-types, react/jsx-no-bind */
import React from 'react'
import CwazyButtons from './cwazybuttons'
import imageDispatcher from '../utils/imagedispatcher'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

export const LostModal = ({isShown, closeModal}) =>
  <ReactCSSTransitionGroup className='transition' transitionName='modal' transitionEnterTimeout={700} transitionLeaveTimeout={700} key='Modal1'>
    {isShown && <div className='overlay' onClick={() => closeModal()}>
      <div className='above-all' onClick={e => e.stopPropagation()}>
        <p className='modal-text'>
          Sorry You Lost Game <span role='img' aria-label='sad-emoji'>☹️</span> Please Try Again
        </p>
        <CwazyButtons onClick={() => closeModal()} text='Restart ▸' />
      </div>
    </div>}
  </ReactCSSTransitionGroup>

export const PrizeModal = ({isShown, closeModal, prize}) =>
  <ReactCSSTransitionGroup className='transition' transitionName='modal' transitionEnterTimeout={700} transitionLeaveTimeout={700} key='Modal1'>
    {isShown && <div className='overlay' onClick={() => closeModal()}>
      <div className='above-all' onClick={e => e.stopPropagation()}>
        <p className='modal-text'>
          <span role='img' aria-label='confetti-emoji'>🎉</span> Congratulations you won
        </p>
        <img src={imageDispatcher[prize]} height='90px' alt='prize' />
        <p>{prize}</p>
        <CwazyButtons onClick={() => closeModal()} text='Continue ▸' />
      </div>
    </div>}
  </ReactCSSTransitionGroup>

export const WinAllModal = ({isShown, closeModal, prize}) =>
  <ReactCSSTransitionGroup className='transition' transitionName='modal' transitionEnterTimeout={1500} transitionLeaveTimeout={1500} key='Modal1'>
    {isShown && <div className='overlay' onClick={() => closeModal()}>
      <div className='above-all' onClick={e => e.stopPropagation()}>
        <p className='modal-text'>
          <span role='img' aria-label='confetti-emoji'>🎉</span> Congratulations you won The Game because We ran out of Prizes
        </p>
        <CwazyButtons onClick={() => closeModal()} text='Restart ▸' />
      </div>
    </div>}
  </ReactCSSTransitionGroup>
