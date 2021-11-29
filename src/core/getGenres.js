export const getGenres = (genres) => {
  const result = [];
  if (genres) {
    for (const genre of genres) {
      result.push(genre.name);
    }
  }

  return result.join(', ');
};
