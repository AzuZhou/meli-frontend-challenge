import React from 'react'
import Link from 'next/link'

import { Container, Price } from './styled'

import { getFormattedPrice } from '../../utils/helpers'
import { CURRENCY } from '../../utils/constants'

const Item = ({ item }) => {
  const { id, price, title, picture, free_shipping } = item

  return (
    <Container>
      <Link href={`/items/${id}`}>
        <div className="link">
          <div>
            <Link href={`/items/${id}`}>
              <a>
                <img src={picture} alt={title} />
              </a>
            </Link>
          </div>
          <div>
            <Link href={`/items/${id}`}>
              <a className="title">{title}</a>
            </Link>
            <Price>
              <span>{CURRENCY[price.currency]}&nbsp;</span>
              <span>{getFormattedPrice(price.amount)}</span>
              {price.decimals > 0 && <span className="decimals">{price.decimals}</span>}
            </Price>
            {free_shipping && <label>Envío gratis</label>}
          </div>
        </div>
      </Link>
    </Container>
  )
}

export default Item
