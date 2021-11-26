import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { nowPlayingRequestAction } from "../../features/modules/nowPlaying/nowPlaying.actions";
import { Box } from "@chakra-ui/react";
import { IntroSlider } from "../../components/IntroSlider/IntroSlider";
import { NewProducts } from "../../components/NewProducts/NewProducts";

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(nowPlayingRequestAction());
  }, []);

  return (
    <Box minH={"100vh"}>
      <IntroSlider />
      <Box pl={{ base: "0", "2md": "56px" }}>
        <NewProducts product={"movie"} />
        <NewProducts product={"tv"} />
      </Box>
    </Box>
  );
};

export default HomePage;
