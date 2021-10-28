export const formatOverview = (overview) => {
  return overview.length < 450 ? overview : overview.slice(0, 447) + "...";
};
