const Functions = {
  toKebabCase(string) {
    return string.replace(/\s+/g, "-").replace("&", "and").toLowerCase();
  },
};

export default Functions;
