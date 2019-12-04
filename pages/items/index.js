import React from 'react'
import fetch from 'isomorphic-unfetch'
import Error from 'next/error'

import Layout from '../../components/Layout'
import ItemsList from '../../components/ItemsList'
import SearchBar from '../../components/SearchBar'

const Items = ({ search, items, errorCode }) => {
  if (errorCode) {
    return <Error statusCode={errorCode} />
  }

  return (
    <Layout>
      <SearchBar input={search} />
      <ItemsList items={items} />
    </Layout>
  )
}

Items.getInitialProps = async ({ query }) => {
  const { search } = query
  const response = await fetch(`${process.env.API_URL}/api/items?q=${search}`)
  let errorCode = response.statusCode > 200 ? response.statusCode : false
  const items = await response.json()
  const { error, status } = items
  if (error) errorCode = status

  return { search, items, errorCode }
}

export default Items
