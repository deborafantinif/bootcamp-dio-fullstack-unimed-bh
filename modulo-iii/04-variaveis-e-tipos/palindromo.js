const palindromo = (phrase) => {
  const phraseSplited = phrase.split('')
  let phraseInverted = []

  for(let i = (phraseSplited.length -1); i >= 0; i--) {
    phraseInverted.push(phraseSplited[i])
  }

  return phraseInverted.join('')
}