const AdaptiveHelper = {
  muiActiveTabSelect(
    currentUrl,
    main_tabs,
    setActiveMainTab,
    setActiveSecondaryTab
  ) {
    const routeToActiveTabMap = {
      [main_tabs[0]?.link]: [0, 0],
      "#section-1": [1, 0],
      "#section-2": [1, 1],
      "#section-3": [1, 2],
      "#section-4": [1, 3],
      "#section-5": [1, 4],
      [main_tabs[1]?.link]: [1, 0],
      [main_tabs[2]?.secondary_tabs[0].link]: [2, 0],
      [main_tabs[2]?.secondary_tabs[1].link]: [2, 1],
      [main_tabs[2]?.link]: [2, 0],
      [main_tabs[3]?.secondary_tabs[0].link]: [3, 0],
      [main_tabs[3]?.secondary_tabs[1].link]: [3, 1],
      [main_tabs[3]?.link]: [3, 0],
      [main_tabs[4]?.link]: [4, 0],
    };

    for (let key of Object.keys(routeToActiveTabMap)) {
      if (currentUrl.includes(key)) {
        setActiveMainTab(routeToActiveTabMap[key][0]);
        setActiveSecondaryTab(routeToActiveTabMap[key][1]);
        break;
      }
    }
  },
};

export default AdaptiveHelper;
