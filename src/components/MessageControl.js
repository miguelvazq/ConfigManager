import React from 'react'
import { Message } from 'semantic-ui-react'

const MessageControl = () => (
    <Message visible>
      <Message.Header>Validation {this.props.header}</Message.Header>
      <p>{this.props.message}</p>
    </Message>
  )
  export default MessageControl