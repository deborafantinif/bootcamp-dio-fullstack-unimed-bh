const verifyNumbers = (array) => {
  if (!array.length) return -1

  const newArray = array.map((number) => {
    if (number % 2 == 0) return 0
    return number
  })

  return newArray
}