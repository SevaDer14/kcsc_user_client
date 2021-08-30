const AdaptiveHelper = {
  muiActiveTabSelect(currentUrl, setActiveMainTab, setActiveSecondaryTab) {
    switch (currentUrl) {
      case "/home":
        setActiveMainTab(0);
        setActiveSecondaryTab(0);
        break;
      case "/services":
        setActiveMainTab(1);
        setActiveSecondaryTab(0);
        break;
      case "/services/search":
        setActiveMainTab(1);
        setActiveSecondaryTab(0);
        break;
      case "/services#find-a-self-care-service":
        setActiveMainTab(1);
        setActiveSecondaryTab(0);
        break;
      case "/services#long-term-self-care":
        setActiveMainTab(1);
        setActiveSecondaryTab(1);
        break;
      case "/services#mental-health":
        setActiveMainTab(1);
        setActiveSecondaryTab(2);
        break;
      case "/services#north-kensington-self-care":
        setActiveMainTab(1);
        setActiveSecondaryTab(3);
        break;
      case "/services#find-a-link-workers":
        setActiveMainTab(1);
        setActiveSecondaryTab(4);
        break;
      case "/about/organization":
        setActiveMainTab(2);
        setActiveSecondaryTab(0);
        break;
      case "/about/self_care":
        setActiveMainTab(2);
        setActiveSecondaryTab(1);
        break;
      case "/news_info/news":
        setActiveMainTab(3);
        setActiveSecondaryTab(0);
        break;
      case "/news_info/information":
        setActiveMainTab(3);
        setActiveSecondaryTab(1);
        break;
      case "/contact":
        setActiveMainTab(4);
        setActiveSecondaryTab(0);
        break;
      default:
        setActiveMainTab(0);
        setActiveSecondaryTab(0);
    }
  },
};

export default AdaptiveHelper;
