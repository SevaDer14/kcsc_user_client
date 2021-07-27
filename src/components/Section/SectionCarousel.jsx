import React from "react";
import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import { Grid, Box } from "@material-ui/core";
import CarouselCard from "./CarouselCard";

const PersonsSection = ({ cards }) => {
  const isPhone = useMediaQuery("(max-width:620px)");
  const isTablet = useMediaQuery("(max-width:1280px)");
  const isBig = useMediaQuery("(max-width:1920px)");

  const listOfPartnersCards = cards.map((card) => (
    <SwiperSlide data-cy={`partner-${card.id}-card`} key={card.id}>
      <CarouselCard card={card} />
    </SwiperSlide>
  ));

  SwiperCore.use([Pagination, Navigation, Autoplay]);

  return (
    <Grid
      style={styles.section}
      container
      alignItems="center"
      direction="column"
      data-cy="page-section"
    >
      <Box style={styles.carousel}>
        <Swiper
          slidesPerView={isPhone ? 1 : isTablet ? 2 : isBig ? 3 : 5}
          spaceBetween={30}
          grabCursor={true}
          navigation={true}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
        >
          <section>{listOfPartnersCards}</section>
        </Swiper>
      </Box>
    </Grid>
  );
};

export default PersonsSection;

const styles = {
  section: {
    height: "650px",
    position: "relative",
    display: "flex",
    justifyContent: "center"
  },
  carousel: {
    position: "absolute",
    width: "100%",
  },
};
