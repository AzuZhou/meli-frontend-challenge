import React from 'react'

import Breadcrumbs from '../Breadcrumbs'

import { Container, Grid, Picture, PrimaryInfo, SecondaryInfo, Price } from './styled'

import { getFormattedPrice } from '../../utils/helpers'

import { CURRENCY, CONDITIONS } from '../../utils/constants'

const ItemDetails = ({ item }) => {
  const { title, price, picture, condition, free_shipping, sold_quantity, description } = item.item
  const hasSold = sold_quantity > 0
  const conditionDisplay = CONDITIONS[condition]

  return (
    <Container>
      <Breadcrumbs />

      <Grid>
        <Picture>
          <img src={picture} alt={title} />
        </Picture>

        <PrimaryInfo>
          <span>
            {conditionDisplay && conditionDisplay}
            {conditionDisplay && hasSold && ' - '}
            {hasSold && `${sold_quantity} vendido${sold_quantity > 0 ? 's' : ''}`}
          </span>

          <h1>{title}</h1>

          {price && (
            <Price>
              <span>{CURRENCY[price.currency]}&nbsp;</span>
              <span>{getFormattedPrice(price.amount)}</span>
              {price.decimals > 0 && <span className="decimals">{price.decimals}</span>}
            </Price>
          )}

          {free_shipping && <label>Envío gratis</label>}

          <button>Comprar ahora</button>
        </PrimaryInfo>

        <SecondaryInfo>
          <h3>Descripción</h3>
          <p>{description}</p>
        </SecondaryInfo>
      </Grid>
    </Container>
  )
}

export default ItemDetails
