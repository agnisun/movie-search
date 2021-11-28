import React, {useEffect} from "react";
import {useHistory, useParams} from "react-router-dom";
import {Box} from "@chakra-ui/react";
import {Product} from "../../components/Product/Product";
import {clearProductAction, productRequestAction} from "../../features/modules/product/product.actions";
import {useDispatch, useSelector} from "react-redux";

const ProductSerialPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(productRequestAction(id, "tv"));
  
    return history.listen((location) => {
      dispatch(clearProductAction())
    })
  }, []);

  const serial = useSelector((state) => state.product.product);

  return (
    <Box minH={"100vh"}>
      <Product id={id} data={serial} />
    </Box>
  );
};

export default ProductSerialPage;
