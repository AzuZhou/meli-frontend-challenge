import React from 'react'

import { Container } from './styled'

const EmptyState = ({ children }) => {
  return (
    <Container>
      <h3>{children}</h3>
    </Container>
  )
}

export default EmptyState
