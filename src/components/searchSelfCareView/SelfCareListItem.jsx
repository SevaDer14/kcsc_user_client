import React from "react";
import { Card, CardActionArea, CardContent, Typography } from "@material-ui/core";

const SelfCareListItem = ({ listing }) => {
  return (
    <Card key={listing.id} variant="outlined" style={styles.listing}>
      <CardActionArea >
        <CardContent >
          <Typography gutterBottom variant="h5" component="h2">
            {listing.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {listing.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default SelfCareListItem;

const styles = {
  listing: {
    margin: "5px"
  }
}
