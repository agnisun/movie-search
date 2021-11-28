import React, {useEffect} from "react";
import {Box} from "@chakra-ui/react";
import {useHistory, useParams} from "react-router-dom";
import {Product} from "../../components/Product/Product";
import {useDispatch, useSelector} from "react-redux";
import {clearProductAction, productRequestAction} from "../../features/modules/product/product.actions";

const ProductMoviePage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  
  useEffect(() => {
    dispatch(productRequestAction(id, "movie"));
  
    return history.listen((location) => {
      dispatch(clearProductAction())
    })
  }, []);

  const movie = useSelector((state) => state.product.product);

  return (
    <Box minH={"100vh"}>
      <Product id={id} data={movie} />
    </Box>
  );
};

export default ProductMoviePage;
