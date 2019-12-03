import React from 'react'
import Error from 'next/error'
import fetch from 'isomorphic-unfetch'

import Layout from '../../components/Layout'
import ItemsList from '../../components/ItemsList'
import SearchBar from '../../components/SearchBar'

const Items = ({ errorCode, items, search }) => {
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
  const errorCode = response.statusCode > 200 ? response.statusCode : false
  const items = await response.json()

  return { errorCode, items, search }
}

export default Items
