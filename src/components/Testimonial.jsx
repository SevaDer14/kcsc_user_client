import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Card,
  CardMedia,
  Typography,
  CardContent,
  CardActions,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    [theme.breakpoints.up("xs")]: {
      position: "absolute",
      width: "100%",
      height: "auto",
    },
    [theme.breakpoints.up("sm")]: {},
    [theme.breakpoints.up("md")]: {
      margin: "0 20px",
      position: "absolute",
      width: "90%",
      maxWidth: "1024px",
      height: "auto",
    },
  },
  // cardImage: {
  //   [theme.breakpoints.up("xs")]: {
  //     width: "100%",
  //     height: "100%",
  //   },
  //   [theme.breakpoints.up("sm")]: {},
  //   [theme.breakpoints.up("md")]: {
  //     // margin: "0 20px",
  //     // position: "absolute",
  //     // width: "90%",
  //     // maxWidth: "1024px",
  //   },
  // },
}));

const Testimonial = ({ slider, data }) => {
  const classes = useStyles();
  return (
    <AnimatePresence initial={false}>
      <motion.div
        key={slider}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className={classes.card}
      >
        <Card data-cy="testimonial">
          <CardMedia
            style={styles.cardImage}
            data-cy="photo"
            component="img"
            alt={data.alt}
            height="360px"
            image={data.photo}
            title={data.name}
          />
          <CardContent>
            <Typography data-cy="name" gutterBottom variant="h5" component="h2">
              {data.name}
            </Typography>
            <Typography
              data-cy="text"
              variant="body2"
              color="textSecondary"
              component="p"
            >
              {data.text}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="secondary">
              Learn More
            </Button>
          </CardActions>
        </Card>
      </motion.div>
    </AnimatePresence>
  );
};
export default Testimonial;
const styles = {
  card: {
    width: "100%",
    height: "100%",
  },
};
