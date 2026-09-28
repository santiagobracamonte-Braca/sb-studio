/** Une clases condicionalmente (helper mínimo, sin dependencias). */
export function cn(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}
