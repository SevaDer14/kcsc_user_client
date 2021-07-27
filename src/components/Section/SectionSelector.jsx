import React from "react";
import SectionRegular from "./SectionRegular";
import SectionNoImage from "./SectionNoImage";
import SectionCarousel from "./SectionCarousel";

const SectionSelector = (props) => {
  const selector = (variant) => {
    switch (variant) {
      case "regular":
        return (
          <SectionRegular
            header={props.header}
            description={props.description}
            image={props.image}
            buttons={props.buttons}
          />
        );
      case "no_image":
        return (
          <SectionNoImage
            header={props.header}
            description={props.description}
          />
        );
      case "carousel":
        return <SectionCarousel header={props.header} cards={props.cards} />;
      default:
        return (
          <SectionRegular
            header={props.header}
            description={props.description}
            image={props.image}
            buttons={props.buttons}
          />
        );
    }
  };

  return (
  <>{selector(props.variant)}</>);
};

export default SectionSelector;
