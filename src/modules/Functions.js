export function toKebabCase(string) {
  string.replace(/\s+/g, "-").replace("&", "and").toLowerCase();
}
