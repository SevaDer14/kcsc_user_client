import { Link } from "react-router-dom";

var Url = require("url-parse");

const AdaptiveHelper = {
  muiActiveTabSelect(
    currentUrl,
    main_tabs,
    setActiveMainTab,
    setActiveSecondaryTab,
    setParent
  ) {
    const routeToActiveTabMap = {
      [main_tabs[0]?.link]: [0, 0, main_tabs[0]?.label],
      "#section-1": [1, 0, main_tabs[1]?.label],
      "#section-2": [1, 1, main_tabs[1]?.label],
      "#section-3": [1, 2, main_tabs[1]?.label],
      "#section-4": [1, 3, main_tabs[1]?.label],
      "#section-5": [1, 4, main_tabs[1]?.label],
      [main_tabs[1]?.link]: [1, 0, main_tabs[1]?.label],
      [main_tabs[2]?.secondary_tabs[0].link]: [2, 0, main_tabs[2]?.label],
      [main_tabs[2]?.secondary_tabs[1].link]: [2, 1, main_tabs[2]?.label],
      [main_tabs[2]?.secondary_tabs[2].link]: [2, 2, main_tabs[2]?.label],
      [main_tabs[2]?.link]: [2, 0, main_tabs[2]?.label],
      [main_tabs[3]?.secondary_tabs[0].link]: [3, 0, main_tabs[3]?.label],
      [main_tabs[3]?.secondary_tabs[1].link]: [3, 1, main_tabs[3]?.label],
      [main_tabs[3]?.link]: [3, 0, main_tabs[3]?.label],
      [main_tabs[4]?.link]: [4, 0, main_tabs[4]?.label],
    };

    for (let key of Object.keys(routeToActiveTabMap)) {
      if (currentUrl.includes(key)) {
        setActiveMainTab(routeToActiveTabMap[key][0]);
        setActiveSecondaryTab(routeToActiveTabMap[key][1]);
        setParent(routeToActiveTabMap[key][2]);
        break;
      }
    }
  },
  handleRedirect(url) {
    let link = new Url(url);
    let navigationProps = {};

    if (link.hostname === window.location.hostname) {
      navigationProps = {
        component: Link,
        to: link.pathname,
      };
    } else {
      navigationProps = {
        href: url,
        target: "_blank",
        rel: "noopener",
      };
    }
    return navigationProps;
  },
};

export default AdaptiveHelper;
