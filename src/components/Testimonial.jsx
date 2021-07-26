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
const Testimonial = ({ slider, data }) => {
  return (
    <AnimatePresence initial={false}>
      <motion.div
        key={slider}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        style={styles.card}
      >
        <Card data-cy="testimonial">
          <CardMedia
          data-cy="photo"
            component="img"
            alt={data.name}
            height="360px"
            image={data.photo}
            title={data.name}
          />
          <CardContent>
            <Typography data-cy="name" gutterBottom variant="h5" component="h2">
              {data.name}
            </Typography>
            <Typography data-cy="text" variant="body2" color="textSecondary" component="p">
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
    margin: "0 20px",
    position: "absolute",
    width: "90%",
    maxWidth: "1024px",
  },
};
