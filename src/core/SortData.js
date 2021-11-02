import { useSelector } from "react-redux";

export const SortData = (data) => {
  const sortBy = useSelector((state) => state.movie.sort);
  switch (sortBy) {
    case "PopularityDescending":
      return data.sort((a, b) => a.popularity - b.popularity);
      break;
  }
};
