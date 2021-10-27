export const ellipsisString = (text: string, long: number) => {
  return text.length > long ? `${text.substr(0, long)}...` : text
}

export const formatPriceRP = (price: number) => {
  if (!price) return 'Rp 0'
  const result = price.toLocaleString('id')
  return `Rp${result}`
}
