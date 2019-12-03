import fetch from 'isomorphic-unfetch'

import { getPriceFraction, getPriceCents } from '../../../utils/helpers'

export default async (req, res) => {
  const { id } = req.query

  if (id) {
    const productUrl = `${process.env.MELI_API_URL}/items/${id}`
    const response = await fetch(productUrl)
    const data = await response.json()

    const { error, status } = data
    if (error) res.json({ error: 'Product not found', statusCode: status })

    const descriptionUrl = `${process.env.MELI_API_URL}/items/${id}/description`
    const descriptionResponse = await fetch(descriptionUrl)
    const descriptionData = await descriptionResponse.json()
    const { plain_text } = descriptionData

    const {
      id: itemId,
      title,
      currency_id,
      price,
      pictures,
      condition,
      shipping,
      sold_quantity
    } = data
    const formattedData = {
      author: {
        name: 'Azucena',
        lastname: 'Zhou'
      },
      item: {
        id: itemId,
        title,
        price: {
          currency: currency_id,
          amount: getPriceFraction(price),
          decimals: getPriceCents(price)
        },
        picture: pictures[0].url,
        condition,
        free_shipping: shipping.free_shipping,
        sold_quantity,
        description: plain_text
      }
    }

    res.status(200).json(formattedData)
  } else {
    res.status(404).json({ error: 'Product not found' })
  }
}
