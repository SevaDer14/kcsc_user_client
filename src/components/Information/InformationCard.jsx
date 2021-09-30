import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Grid,
} from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const InformationCard = ({ item }) => {
  const { header, description, link } = item;
  return (
    <Card elevation={2} >
      <CardActionArea href={link} target='_blank' style={styles.cardActionArea} data-cy="action-area">
        <Grid container direction="row" >
          <Grid item sm={10} xs={11}>
            <CardContent style={styles.cardContent}>
              <Typography gutterBottom variant="h5" component="h2" data-cy="header">
                {header}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p" data-cy="description">
                {description}
              </Typography>
            </CardContent>
          </Grid>
          <Grid item container sm={2} xs={1} alignContent='center' style={styles.arrow}>
            <ArrowForwardIosIcon color="secondary" />
          </Grid>
        </Grid>
      </CardActionArea>
    </Card>
  );
};

export default InformationCard;

const styles = {
  card: {
    height: "270px",
    width: '100%'
  },
  cardActionArea: {
    height: '280px'
  },
  cardContent: {
    padding: "30px 20px",
    height: '100%'
  },
  arrow: {
    height: '270px'
  }
};