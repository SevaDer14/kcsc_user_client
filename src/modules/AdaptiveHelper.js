const AdaptiveHelper = {
  muiActiveTabSelect(currentUrl, setActiveMainTab, setActiveSecondaryTab) {
    const routeToActiveTabMap = {
      "/home": [0, 0],
      "#find-a-self-care-service": [1, 0],
      "#long-term-self-care": [1, 1],
      "#mental-health": [1, 2],
      "#north-kensington-self-care": [1, 3],
      "#find-a-link-workers": [1, 4],
      "/services": [1, 0],
      "/organization": [2, 0],
      "/self_care": [2, 1],
      "/about": [2, 0],
      "/news_info/news": [3, 0],
      "/information": [3, 1],
      "/news_info": [3, 0],
      "/contact": [4, 0],
    };

    for (let key of Object.keys(routeToActiveTabMap)) {
      if (currentUrl.includes(key)) {
        setActiveMainTab(routeToActiveTabMap[key][0]);
        setActiveSecondaryTab(routeToActiveTabMap[key][1]);
        break
      }
    }
  },
};

export default AdaptiveHelper;
