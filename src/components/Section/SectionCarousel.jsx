import React from "react";
import { Grid, Container, Typography } from "@material-ui/core";
import CarouselCard from "./CarouselCard";

const SectionCarousel = ({ cards, header }) => {
  const listOfPartnersCards = cards.map((card, i) => (
    <Grid key={`partner-card-${i}`} item xs={12} md={6} lg={4}>
      <CarouselCard card={card} />
    </Grid>
  ));

  return (
    <Container maxWidth="lg" style={{ padding: "1rem" }}>
      <Typography
        variant="h3"
        gutterBottom
        style={{ width: "100%", textAlign: "center", margin: "2rem 0" }}
      >
        {header}
      </Typography>
      <Grid container spacing={0} data-cy="page-section">
        {listOfPartnersCards}
      </Grid>
    </Container>
  );
};

export default SectionCarousel;
