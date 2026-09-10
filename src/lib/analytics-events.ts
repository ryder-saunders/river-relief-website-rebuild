export type ConversionType =
  "book_call" | "call" | "contact" | "qualify" | "return_home";

export function conversionTypeForHref(href: string): ConversionType {
  if (href.startsWith("tel:")) {
    return "call";
  }

  if (href === "/book-consultation") {
    return "book_call";
  }

  if (href === "/contact") {
    return "contact";
  }

  if (href === "/") {
    return "return_home";
  }

  return "qualify";
}
