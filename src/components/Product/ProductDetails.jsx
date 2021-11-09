import React from "react";
import { Box, VStack } from "@chakra-ui/react";

export const ProductDetails = ({
  original_title,
  original_language,
  budget,
  revenue,
  status,
}) => {
  const budgetProduct = budget ? "$" + budget : "-";
  const revenueProduct = revenue ? "$" + revenue : "-";

  return (
    <Box p={"30px 0"}>
      <Box fontSize={"24px"} mb={"30px"}>
        More Details
      </Box>
      <VStack alignItems={"flex-start"} spacing={"30px"}>
        <Box>
          <Box>Original title</Box>
          <Box fontWeight={"400"} fontSize={"16px"}>
            {original_title}
          </Box>
        </Box>
        <Box>
          <Box>Original language</Box>
          <Box textTransform={"uppercase"} fontWeight={"400"} fontSize={"16px"}>
            {original_language}
          </Box>
        </Box>
        <Box>
          <Box>Status</Box>
          <Box fontWeight={"400"} fontSize={"16px"}>
            {status}
          </Box>
        </Box>
        <Box>
          <Box>Budget</Box>
          <Box fontWeight={"400"} fontSize={"16px"}>
            {budgetProduct}
          </Box>
        </Box>
        <Box>
          <Box>Revenue</Box>
          <Box fontWeight={"400"} fontSize={"16px"}>
            {revenueProduct}
          </Box>
        </Box>
      </VStack>
    </Box>
  );
};
