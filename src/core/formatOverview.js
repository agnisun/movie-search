export const formatOverview = (overview) => {
  if (window.innerWidth < 400) {
    return overview.length < 250 ? overview : overview.slice(0, 247) + "...";
  }
  return overview.length < 450 ? overview : overview.slice(0, 447) + "...";
};
