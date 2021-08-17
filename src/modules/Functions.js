import store from "../state/store/configureStore";

const Functions = {
  toKebabCase(string) {
    return string.replace(/\s+/g, "-").replace("&", "and").toLowerCase();
  },
  dispatchPopup(type, message) {
    store.dispatch({
      type: "SET_POPUP_MESSAGE",
      payload: {
        type: type,
        message: message,
      },
    })  
  },
  redirectToErrorPage() {
    store.dispatch({ type: "SET_LAYOUT_LOAD_ERROR", payload: true });
  }
};

export default Functions;
