import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Router from 'next/router'

import { Container, StyledImage, StyledForm } from './styled'

const SearchBar = ({ input: incomingInput, autoFocus }) => {
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
      <div>
        <Link href={'/'}>
          <a>
            <StyledImage src={'/meli-isologo.png'} alt="Mercado Libre" />
          </a>
        </Link>

        <StyledForm onSubmit={handleSearch}>
          <input
            type="text"
            placeholder={'Buscar productos, marcas y más...'}
            value={input}
            onChange={handleInputChange}
            autoFocus={autoFocus}
          />
          <button>
            <img src="/search.svg" alt="Buscar" />
          </button>
        </StyledForm>
      </div>
    </Container>
  )
}

export default SearchBar
