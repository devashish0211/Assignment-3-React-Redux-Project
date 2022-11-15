import { Avatar } from '@mui/material'
import React from 'react'
import './Message.css'

function Message() {
  return (
    <div className='message'>
      <Avatar />
      <div className="message__info">
        <h4>dev@1102
            <span className='message__timestamp'>this is timestamp</span>
        </h4>

        <p>This is a message</p>
      </div>
    </div>
  )
}

export default Message
