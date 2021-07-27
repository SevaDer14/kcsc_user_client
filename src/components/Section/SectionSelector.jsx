import React from "react";
import SectionRegular from "./SectionRegular";
import SectionNoImage from "./SectionNoImage";

const SectionSelector = ({
  variant,
  header,
  description,
  image,
  buttons,
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
