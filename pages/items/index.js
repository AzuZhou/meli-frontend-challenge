import React from 'react'
import fetch from 'isomorphic-unfetch'
import Error from 'next/error'

import SearchBar from '../../components/SearchBar'

const Items = ({ errorCode, items, search }) => {
  if (errorCode) {
    return <Error statusCode={errorCode} />
  }
  console.log(items)

  return (
    <div>
      <SearchBar input={search} />
      <h2>Products</h2>
    </div>
  )
}

Items.getInitialProps = async ({ query }) => {
  const { search } = query
  // TODO: const { API_URL } = process.env
  const response = await fetch(`http://localhost:3000/api/items?q=${search}`)
  const errorCode = response.statusCode > 200 ? response.statusCode : false
  const items = await response.json()

  return { errorCode, items, search }
}

export default Items
