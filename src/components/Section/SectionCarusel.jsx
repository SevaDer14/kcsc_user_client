import React from "react";
import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import {
  Grid,
  Card,
  CardMedia,
  Typography,
  CardContent,
  CardActions,
  Button,
} from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LanguageIcon from "@material-ui/icons/Language";

const PersonsSection = ({cards}) => {
  const isPhone = useMediaQuery("(max-width:620px)");
  const isTablet = useMediaQuery("(max-width:1280px)");
  const isBig = useMediaQuery("(max-width:1920px)");

  const listOfPartnersCards = cards.map((card) => (
    <SwiperSlide data-cy={`partner-${card.id}-card`} key={card.id}>
      <Card data-cy="testimonial">
        <CardMedia
          data-cy="photo"
          component="img"
          alt={card.alt}
          height="360px"
          image={card.logo}
          title={card.organization}
        />
        <CardContent>
          <Typography
            data-cy="organization"
            gutterBottom
            variant="h5"
            component="h2"
          >
            {card.organization}
          </Typography>
          <Typography
            data-cy="description"
            variant="body2"
            color="textSecondary"
            component="p"
          >
            {card.description}
          </Typography>
        </CardContent>
        <CardActions>
          {card.links.web && (
            <Button
              size="small"
              variant="contained"
              color="secondary"
              href={card.links.web}
            >
              <LanguageIcon />
            </Button>
          )}
          {card.links.facebook && (
            <Button
              size="small"
              variant="contained"
              color="secondary"
              href={card.links.facebook}
            >
              <FacebookIcon />
            </Button>
          )}
          {card.links.twitter && (
            <Button
              size="small"
              variant="contained"
              color="secondary"
              href={card.links.twitter}
            >
              <TwitterIcon />
            </Button>
          )}
        </CardActions>
      </Card>
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
      <Swiper
        slidesPerView={isPhone ? 1 : isTablet ? 2 : isBig ? 4 : 5}
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
    </Grid>
  );
};

export default PersonsSection;

const styles = {
  section: {
    height: "650px"
  },
};
