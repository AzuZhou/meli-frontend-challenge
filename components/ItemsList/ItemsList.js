import React from 'react'
import nanoid from 'nanoid'

import Item from '../Item'
import Breadcrumbs from '../Breadcrumbs'
import EmptyState from '../EmptyState'

import { Container, List } from './styled'

const ItemsList = ({ items }) => {
  const { items: itemsList, categories } = items

  const emptySearch = itemsList === ''
  if (emptySearch) return <EmptyState>Escribí en el buscador lo que querés encontrar</EmptyState>

  const emptyResults = itemsList.length < 1
  if (emptyResults)
    return <EmptyState>No se encontraron resultados que se adecúen a esta búsqueda</EmptyState>

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
