import React from "react";
import { CardMedia, makeStyles, Typography } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import { AnimatePresence, motion } from "framer-motion";
import logo from "../assets/LogoCHWLMobile.png";

const useStyles = makeStyles((theme) => ({
  loadingScreen: {
    [theme.breakpoints.up("xs")]: {
      display: "flex",
      flexDirection: "column",
      height: "100vh",
      alignItems: "center",
      justifyContent: "center",
    },
  },
  logo: {
    [theme.breakpoints.up("xs")]: {
      height: "5vh",
      width: "5vw",
      alignContent: "center",
      justifyContent: "center",
      marginTop: "20px",
      marginBottom: "20px",
    },
  },
}));

const LoadingScreen = () => {
  const classes = useStyles();

  return (
    <AnimatePresence>
      <motion.div
        className={classes.loadingScreen}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant={"h4"}>Loading...</Typography>
        <CardMedia
          component="img"
          image={logo}
          alt="Loading screen logo"
          className={classes.logo}
        />
        <CircularProgress />
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;
