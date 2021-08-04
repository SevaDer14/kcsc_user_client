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
    <Card elevation={2} style={styles.fullHeight}>
      <CardActionArea href={link} style={styles.fullHeight}>
        <Grid container direction="row" style={styles.fullHeight}>
          <Grid item xs={10}>
            <CardContent style={styles.cardContent}>
              <Typography gutterBottom variant="h5" component="h2" style={styles.header}>
                {header}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {description}
              </Typography>
            </CardContent>
          </Grid>
          <Grid item xs={2} >
            <ArrowForwardIosIcon color="secondary" style={styles.fullHeight}/>
          </Grid>
        </Grid>
      </CardActionArea>
    </Card>
  );
};

export default InformationCard;

const styles = {
  fullHeight: {
    height: "100%"
  },
  cardContent: {
    padding: "30px 20px"
  },
  header: {

  }
}