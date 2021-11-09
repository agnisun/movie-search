import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import { Product } from "../../components/Product/Product";
import { productRequestAction } from "../../features/modules/product/product.actions";
import { useDispatch, useSelector } from "react-redux";

export const ProductSerialPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const setProduct = () => dispatch(productRequestAction(id, "tv"));
  const setCredits = () => dispatch(productRequestAction(id, "tv"));
  const getVideos = () => dispatch(productRequestAction(id, "tv"));

  useEffect(() => {
    setProduct();
    setCredits();
    getVideos();
  }, []);

  const serial = useSelector((state) => state.product.product);

  return (
    <Box minH={"100vh"}>
      <Product id={id} data={serial} />
    </Box>
  );
};