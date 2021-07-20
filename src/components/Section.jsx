import React from 'react'
import { Typography, Box, Paper } from '@material-ui/core'

const Section = ({header, description, image, buttons }) => {
  return (
    <Box data-cy="service-section">
      <Typography data-cy="header" variant="h4" component="h3" gutterBottom >
        {header}
      </Typography>
      <Typography data-cy="description" variant="body1" component="p">
        {description}
      </Typography>
      <Paper variant="outlined" data-cy="image">
        <img src={image.url} alt={image.alt}/>
      </Paper>
    </Box>
  )
}

export default Section
