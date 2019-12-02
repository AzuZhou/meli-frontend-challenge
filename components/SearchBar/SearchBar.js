import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Router from 'next/router'

import { Container, StyledImage, StyledForm } from './styled'

const SearchBar = props => {
  const { input: incomingInput } = props
  const [input, setInput] = useState('')

  useEffect(() => {
    if (incomingInput) setInput(incomingInput)
  }, [])

  const handleInputChange = e => {
    const { value } = e.target
    setInput(value)
  }

  const handleSearch = e => {
    e.preventDefault()
    if (!input) return
    Router.push({ pathname: '/items', query: { search: input } })
  }

  return (
    <Container>
      <Link href={'/'}>
        <StyledImage src={'/meli-isologo.png'} alt="Mercado Libre" />
      </Link>

      <StyledForm onSubmit={handleSearch}>
        <input type="text" value={input} onChange={handleInputChange} />
        <button>
          <img src="/search.svg" alt="Buscar" />
        </button>
      </StyledForm>
    </Container>
  )
}

export default SearchBar
