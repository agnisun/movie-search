import React, { useEffect } from "react";
import { Box } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { Product } from "../../components/Product/Product";
import { useDispatch, useSelector } from "react-redux";
import { productRequestAction } from "../../features/modules/product/product.actions";

export const ProductMoviePage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const setProduct = () => dispatch(productRequestAction(id, "movie"));
  const setCredits = () => dispatch(productRequestAction(id, "movie"));
  const getVideos = () => dispatch(productRequestAction(id, "movie"));

  useEffect(() => {
    setProduct();
    setCredits();
    getVideos();
  }, []);

  const movie = useSelector((state) => state.product.product);

  return (
    <Box minH={"100vh"}>
      <Product id={id} data={movie} />
    </Box>
  );
};