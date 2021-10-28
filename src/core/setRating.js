export const setRating = (raiting) => {
  if (raiting >= 8) {
    return "★★★★★";
  } else if (raiting >= 6 && raiting < 8) {
    return "★★★★☆";
  } else if (raiting >= 4 && raiting < 6) {
    return "★★★☆☆";
  } else if (raiting >= 2 && raiting < 4) {
    return "★★☆☆☆";
  } else {
    return "★☆☆☆☆";
  }
};
