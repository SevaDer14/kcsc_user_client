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
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  card: {
    [theme.breakpoints.up("xs")]: {
      position: "absolute",
      width: "90%",
      height: "auto",
      borderRadius: "7px",
    },
    [theme.breakpoints.up("md")]: {
      margin: "0 20px",
      maxWidth: "1024px",
    },
  },
  image: {
    [theme.breakpoints.up("xs")]: {
      width: "100%",
      height: "150px",
    },
    [theme.breakpoints.up("sm")]: {
      height: "300px",
    },
    [theme.breakpoints.up("md")]: {
      height: "350px",
    },
  },
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
            className={classes.image}
            data-cy="photo"
            component="img"
            alt={data.alt}
            height="360px"
            image={data.photo}
            title={data.name}
          />
          <CardContent className={classes.text}>
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
            <Button
              component={Link}
              to={data?.link}
              target={!data?.link.includes(window.location.hostname) && "_blank"}
              size="small"
              color="secondary"
            >
              Learn More
            </Button>
          </CardActions>
        </Card>
      </motion.div>
    </AnimatePresence>
  );
};
export default Testimonial;
