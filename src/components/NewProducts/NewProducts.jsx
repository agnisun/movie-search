import React from 'react';
import {Box, Image} from "@chakra-ui/react";
import {Link} from "react-router-dom";
import arrowRight from "../../assets/arrow-right.svg";
import Slider from "react-slick";
import {settings} from "./sliderSettings";
import {useSelector} from "react-redux";
import {NewProductItem} from "./NewProductItem";

export const NewProducts = ({product}) => {
  const headingTitle = product === "movie" ? "New releases " : "Featured TV shows "
  const products = useSelector(state => product === "movie" ? state.data.movies.results : state.data.serials.results)
  
  return (
    <Box as={"section"}>
      <Box as={"h3"} fontSize={{ "2xl": "22px" }}>
        <Link to={`/${product}`}>
          {headingTitle}
          <Image display={"inline-block"} src={arrowRight} />
        </Link>
      </Box>
      <Slider {...settings}>
        {products && products.map(item => (
          <NewProductItem key={item.id} data={item} product={product}/>
          ))}
      </Slider>
    </Box>
  );
};