export type SocialPlatform = "github" | "linkedin" | "instagram" | "facebook";

export type SocialLink = {
  id: SocialPlatform;
  label: string;
  href: string;
};

// Írd be a saját közösségi oldalaid URL-jét a href mezőkbe.
// Új platformhoz adj hozzá egy új elemet, majd rendeld hozzá az ikont a Footer.tsx fájlban.
export const socialLinks: SocialLink[] = [
  { id: "github", label: "GitHub", href: "" },
  { id: "linkedin", label: "LinkedIn", href: "" },
  { id: "instagram", label: "Instagram", href: "" },
  { id: "facebook", label: "Facebook", href: "" },
];

export const footerNavigation = [
  { labelKey: "footer.links.calculator", href: "/calculator" },
  { labelKey: "footer.links.projects", href: "/projects" },
  { labelKey: "footer.links.products", href: "/products" },
  { labelKey: "footer.links.contact", href: "/contact" },
];

export const footerLegalLinks = [
  { labelKey: "footer.legal.privacy", href: "/privacy" },
  { labelKey: "footer.legal.terms", href: "/terms" },
  { labelKey: "footer.legal.cookies", href: "/cookies" },
];
