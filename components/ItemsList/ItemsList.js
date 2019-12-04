import React from 'react'
import nanoid from 'nanoid'

import Item from '../Item'
import Breadcrumbs from '../Breadcrumbs'

import { Container, List } from './styled'

const ItemsList = ({ items }) => {
  const { items: itemsList, categories } = items
  const itemsWithKey = itemsList.map(item => {
    return { ...item, key: nanoid() }
  })

  return (
    <Container>
      {categories && <Breadcrumbs categories={categories} />}
      <List>
        {itemsWithKey.map(item => {
          return (
            <li key={item.key}>
              <Item item={item} />
            </li>
          )
        })}
      </List>
    </Container>
  )
}

export default ItemsList
