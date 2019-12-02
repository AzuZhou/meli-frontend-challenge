import fetch from 'isomorphic-unfetch'

export default async (req, res) => {
  res.send('id')
  // const { q } = req.query

  // if (q) {
  //   const { MELI_API_URL } = process.env
  //   const searhUrl = `${MELI_API_URL}/sites/MLA/search?q=${q}`
  //   const response = await fetch(searhUrl)
  //   const data = await response.json()
  //   res.status(200).json(data)
  // } else {
  //   res.status(404).json({ error: 'No products found' })
  // }
}
