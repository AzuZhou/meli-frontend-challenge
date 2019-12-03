export const getPriceFraction = price => {
  if (Number.isInteger(price)) return price
  return Math.trunc(price)
}
export const getPriceCents = price => {
  if (Number.isInteger(price)) return 0
  const decimal = price.toFixed(2).split('.')[1]
  return parseInt(decimal, 10)
}
