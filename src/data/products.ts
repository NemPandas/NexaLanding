import nexaCliImage from "../images/NEXACLI.png";

export type Product = {
  id: string;
  titleKey: string;
  descriptionKey: string;
  image: string;
  href: string;
  featured: boolean;
};

// Egy új termék felvételéhez másold le az egyik objektumot, majd add hozzá
// a hozzá tartozó HU/EN fordítási kulcsokat az i18n.ts fájlban.
export const products: Product[] = Array.from({ length: 4 }, (_, index) => ({
  id: `nexa-cli-${index + 1}`,
  titleKey: "productsPage.items.nexaCli.title",
  descriptionKey: "productsPage.items.nexaCli.description",
  image: nexaCliImage,
  href: "https://cli.nexahubcommunity.com/",
  featured: true,
}));
