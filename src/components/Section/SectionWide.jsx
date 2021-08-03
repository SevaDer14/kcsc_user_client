import React from 'react'
import { Typography, Box, Grid, CardMedia, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  section: {
    [theme.breakpoints.up("xs")]: {
      display: "flex",
      flexDirection: "column",
      maxHeight: "400px",
      width: "100vw",
      backgroundSize: "cover",
    },
  },
  image: {
    [theme.breakpoints.up("xs")]: {
      zIndex: "-1",
      height: "100%",
      width: "100vw",
      backgroundSize: "cover",
    },
  }
}));

const SectionWide = ({header, description, image, buttons, buttonList}) => {
  const classes = useStyles()
  return (
    <Grid container className={classes.section}>
      <CardMedia
        component="img"
        image={image.url}
        data-cy="logo"
        className={classes.image}
        alt="Community Health West London"
      />
      <Grid
        item
        xs={12}
        lg={6}
        // style={
        //   idEven
        //     ? styles.itemContainer
        //     : { ...styles.itemContainer, backgroundColor: "#0008" }
        // }
      >
        <Typography
          data-cy="header"
          variant="h3"
          component="h3"
          // style={idEven ? { color: "#000" } : { color: "#fff" }}
          gutterBottom
        >
          {header}
        </Typography>
        <Typography
          data-cy="description"
          variant="body1"
          component="p"
          // style={idEven ? { color: "#000" } : { color: "#fff" }}
          gutterBottom
        >
          {description}
        </Typography>
        <Box >{buttons && buttonList}</Box>
        {/* <Box style={styles.buttonContainer}>{buttons && buttonList}</Box> */}
      </Grid>
    </Grid>
  )
}

export default SectionWide
