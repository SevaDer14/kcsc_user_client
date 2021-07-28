import React from "react";
import SectionRegularAlt from "./SectionRegularAlt";
import SectionRegular from "./SectionRegular";
import SectionNoImage from "./SectionNoImage";
import SectionCarousel from "./SectionCarousel";

const SectionSelector = ({ section }) => {
  const selector = (variant) => {
    switch (variant) {
      case "regular":
        return (
          <SectionRegular
            id={section.id}
            header={section.header}
            description={section.description}
            image={section.image}
            buttons={section.buttons}
          />
        );
      case "no_image":
        return (
          <SectionNoImage
            header={section.header}
            description={section.description}
          />
        );
      case "carousel":
        return (
          <SectionCarousel header={section.header} cards={section.cards} />
        );
      default:
        return (
          <SectionRegular
            header={section.header}
            description={section.description}
            image={section.image}
            buttons={section.buttons}
          />
        );
    }
  };

  return <>{selector(section.variant)}</>;
};

export default SectionSelector;
