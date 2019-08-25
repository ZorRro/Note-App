export function stripHTML(value: string) {
  return value.replace(/<[^>]*>?/gm, "");
}
