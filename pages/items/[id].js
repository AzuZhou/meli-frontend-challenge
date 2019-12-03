import React from 'react'
import Error from 'next/error'
import fetch from 'isomorphic-unfetch'

import SearchBar from '../../components/SearchBar'

const Item = ({ errorCode, item }) => {
  if (errorCode) {
    return <Error statusCode={errorCode} />
  }

  return (
    <div>
      <SearchBar />
      <h2>Product</h2>
    </div>
  )
}

Item.getInitialProps = async ({ query }) => {
  const { id } = query
  const response = await fetch(`${process.env.API_URL}/api/items/${id}`)
  const item = await response.json()
  const { statusCode } = item
  const errorCode = statusCode > 200 ? statusCode : false

  return { errorCode, item }
}

export default Item
