import React from "react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import { Grid, Container, Typography } from "@material-ui/core";
import CarouselCard from "./CarouselCard";

const SectionCarousel = ({ cards, header }) => {
  const listOfPartnersCards = cards.map((card) => (
    <Grid item xs={12} md={6} lg={4}>
      <CarouselCard card={card} />
    </Grid>
  ));

  return (
    <Container maxWidth="lg" style={{ padding: "1rem" }}>
      <Typography
        variant="h3"
        gutterBottom
        style={{ width: "100%", textAlign: "center" }}
      >
        {header}
      </Typography>
      <Grid container spacing={3} data-cy="page-section">
        {listOfPartnersCards}
      </Grid>
    </Container>
  );
};

export default SectionCarousel;
