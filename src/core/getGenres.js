export const getGenres = (genres) => {
  const result = []
  if (genres) {
    for (let genre of genres) {
      result.push(genre.name)
    }
  }
  
  return result.join(', ')
}