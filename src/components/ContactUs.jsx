import React from 'react'
import { Typography } from '@material-ui/core'



const ContactUs = ({data}) => {
 
  return (
    <div data-cy="contact-us" style={styles.container}>
    <Typography data-cy="contact-us-header" variant="h2" component="h2">
      Contact Us
    </Typography>
    <Typography data-cy="contact-us-email" style={styles.subCat}>
      Email: {data.email}
    </Typography>
    <Typography data-cy="contact-us-phone" style={styles.subCat}>
      Phone: {data.phone}
    </Typography>
  </div>
  )
}

export default ContactUs

const styles = {
  container: {
    marginTop: "15%",
    marginLeft: "20%",
  },
  subCat: {
    marginTop: "16px",
  }
};
