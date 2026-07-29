import smuciSneakersImage from "../images/SMUCISNEAKERS.jpeg";

export type Project = {
  id: string;
  titleKey: string;
  descriptionKey: string;
  image: string;
  href: string;
  tags: string[];
};

// Új projekthez másold le az egyik objektumot, cseréld ki az adatokat,
// majd add hozzá a HU/EN fordításokat az i18n.ts fájlban.
export const projects: Project[] = Array.from({ length: 4 }, (_, index) => ({
  id: `smuci-sneakers-${index + 1}`,
  titleKey: "projectsPage.items.smuci.title",
  descriptionKey: "projectsPage.items.smuci.description",
  image: smuciSneakersImage,
  href: "https://smucisneakers.com/",
  tags: ["E-commerce", "Web design", "Development"],
}));
