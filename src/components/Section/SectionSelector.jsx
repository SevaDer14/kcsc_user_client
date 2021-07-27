import React from "react";
import SectionRegular from "./SectionRegular";
import SectionNoImage from "./SectionNoImage";
import SectionCarusel from "./SectionCarusel";

const SectionSelector = ({
  variant,
  header,
  description,
  image,
  buttons,
  cards
}) => {
  const selector = (variant) => {
    switch (variant) {
      case "regular":
        return (
          <SectionRegular
            header={header}
            description={description}
            image={image}
            buttons={buttons}
          />
        );
      case "no_image":
        return (
          <SectionNoImage
            header={header}
            description={description}
            image={image}
            buttons={buttons}
          />
        );
        case "carusel":      
        return (
          <SectionCarusel
            header={header}
            cards={cards}
          />
        );
      default:
        return (
          <SectionRegular
            header={header}
            description={description}
            image={image}
            buttons={buttons}
          />
        );
    }
  };

  return <>{selector(variant)}</>;
};

export default SectionSelector;
