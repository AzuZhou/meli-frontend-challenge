import React from 'react'
import Error from 'next/error'
import fetch from 'isomorphic-unfetch'

import SearchBar from '../../components/SearchBar'

const Items = ({ errorCode, items, search }) => {
  if (errorCode) {
    return <Error statusCode={errorCode} />
  }

  return (
    <div>
      <SearchBar input={search} />
      <h2>Products</h2>
    </div>
  )
}

Items.getInitialProps = async ({ query }) => {
  const { search } = query
  const response = await fetch(`${process.env.API_URL}/api/items?q=${search}`)
  const errorCode = response.statusCode > 200 ? response.statusCode : false
  const items = await response.json()

  return { errorCode, items, search }
}

export default Items
