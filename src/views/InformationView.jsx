import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Container, Grid, makeStyles } from "@material-ui/core";
import Information from "../modules/Information";
import InformationItem from "../components/Information/InformationItem";
import InformationCard from "../components/Information/InformationCard";
import information_view_sections from "../data/fixtures/information_view_sections.json";
import Functions from "../modules/Functions";
import SectionSelector from "../components/Section/SectionSelector";

const useStyles = makeStyles((theme) => ({
  grid: {
    [theme.breakpoints.up("xs")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexWrap: "nowrap",
    },
    sectionHeader: {
      [theme.breakpoints.up("xs")]: { 
        marginTop: "60px", 
        marginBottom: "20px" 
      },
    },
  },
}));

const InformationView = () => {
  const [pinnedItems, setPinnedItems] = useState([]);
  const [otherItems, setOtherItems] = useState([]);
  const [sections, setSections] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    const fetchPageData = async () => {
      // Here for future, when api stores sections.
      //let response = await Sections.read("about_us");
      //setSections(response);
      setSections(information_view_sections.sections);
      let response = await Information.index();
      let pinnedItems = response.filter(item => item.pinned === true)
      let otherItems = response.filter(item => item.pinned === false)
      setPinnedItems(pinnedItems);
      setOtherItems(otherItems);
    };
    fetchPageData();
  }, []);

  const sectionList = sections.map((section) => {
    return (
      <Grid
        item
        key={`section-${section.id}`}
        id={Functions.toKebabCase(section.header)}
      >
        <SectionSelector id={section.id} section={section} />
      </Grid>
    );
  });

  const otherItemsList = otherItems.map((item, index) => {
    return (
      <Grid item key={`other-item-${index}`} data-cy="information-card">
        <InformationItem item={item} />
      </Grid>
    );
  });

  const pinnedItemsList = pinnedItems.map((item, index) => {
    return (
      <Grid item key={`pinned-item-${index}`} sm={6} data-cy="information-card">
        <InformationCard item={item} />
      </Grid>
    );
  });

  return (
    <>
      <Helmet>
        <title>Information</title>
      </Helmet>
      <Grid container className={classes.grid} spacing={0}>
        {sectionList}
      </Grid>
      <Container maxWidth="md" style={{marginTop: "32px"}}>
        <Grid container spacing={3} data-cy="pinned-information-items">
          {pinnedItemsList}
        </Grid>
        <Grid
          container
          style={{marginTop: "32px"}}
          spacing={0}
          direction="column"
          alignItems="stretch"
          data-cy="other-information-items"
        >
          {otherItemsList}
        </Grid>
      </Container>
    </>
  );
};

export default InformationView;
