import React from 'react'
import { Message } from 'semantic-ui-react'

type Props = {
  error: string
}

export default ({ error }: Props) => <Message error={true}>{error}</Message>
