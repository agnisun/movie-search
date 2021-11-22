import { addToFavourite } from "./addToFavourite";

export const toggleFavourite = (
  product,
  setStatus,
  isFavourite,
  title,
  toast,
  setState
) => {
  if (!isFavourite) {
    localStorage.setItem(product.id, JSON.stringify(product));
  } else {
    localStorage.removeItem(product.id);
    if (setState) {
      setState((prev) =>
        prev.filter((favourite) => favourite.id !== product.id)
      );
    }
  }

  setStatus();
  addToFavourite(title, isFavourite, toast);
};
