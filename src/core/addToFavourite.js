export const addToFavourite = (title, toast) => {
  toast({
    position: "top-right",
    title: "Success.",
    description: `${title} was added to your favourite list`,
    status: "success",
    duration: 9000,
    isClosable: true,
  });
};
