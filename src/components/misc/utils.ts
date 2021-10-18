export const ellipsisString = (text: string, long: number) => {
  return text.length > long ? `${text.substr(0, long)}...` : text
}
