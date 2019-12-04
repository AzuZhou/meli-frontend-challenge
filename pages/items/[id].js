import React from 'react'
import Error from 'next/error'
import fetch from 'isomorphic-unfetch'

import Layout from '../../components/Layout'
import SearchBar from '../../components/SearchBar'
import ItemDetails from '../../components/ItemDetails'

const Item = ({ errorCode, item }) => {
  if (errorCode) {
    return <Error statusCode={errorCode} />
  }

  return (
    <Layout>
      <SearchBar />
      <ItemDetails item={item} />
    </Layout>
  )
}

Item.getInitialProps = async ({ query }) => {
  const { id } = query
  const response = await fetch(`${process.env.API_URL}/api/items/${id}`)
  const item = await response.json()
  const { statusCode } = item
  let errorCode = statusCode > 200 ? statusCode : false
  const { error, status } = item
  if (error) errorCode = status

  return { errorCode, item }
}

export default Item
