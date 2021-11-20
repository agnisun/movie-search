export const getContentRaiting = (raiting, country) => {
  const filterRaiting =
    raiting && country && raiting.filter((el) => el.iso_3166_1 === country);

  if (filterRaiting && filterRaiting.length && filterRaiting[0].rating) {
    return filterRaiting && filterRaiting.length > 0 && filterRaiting[0].rating;
  }

  return (
    filterRaiting &&
    filterRaiting.length > 0 &&
    filterRaiting[0].release_dates[0].certification
  );
};
