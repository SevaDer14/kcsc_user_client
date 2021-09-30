import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Grid,
} from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const InformationItem = ({ item }) => {
  const { header, description, link } = item;
  return (
    <Card elevation={0} variant="outlined">
      <CardActionArea
        href={link}
        target="_blank"
        style={styles.card}
        data-cy="action-area"
      >
        <Grid container direction="row">
          <Grid item xs={11}>
            <CardContent style={styles.cardContent}>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                data-cy="header"
              >
                {header}
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                data-cy="description"
              >
                {description}
              </Typography>
            </CardContent>
          </Grid>
          <Grid item xs={1}>
            <ArrowForwardIosIcon color="secondary" style={styles.fullHeight} />
          </Grid>
        </Grid>
      </CardActionArea>
    </Card>
  );
};

export default InformationItem;

const styles = {
  card: {
    minHeight: "150px",
  },
  fullHeight: {
    height: "150px",
  },
  cardContent: {
    padding: "30px 20px",
  },
};