import React from 'react'

import { Container } from './styled'

const Breadcrumbs = ({ categories }) => {
  return (
    <Container>
      {categories.map(category => {
        return <span key={category}>{category}</span>
      })}
    </Container>
  )
}

export default Breadcrumbs
