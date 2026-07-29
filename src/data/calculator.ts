export type Price = {
  min: number;
  max: number;
};

export type CalculatorOption = {
  id: string;
  labelKey: string;
  oneTime: Price;
  withOperation: Price;
};

export type CalculatorGroup = {
  id: "projectType" | "design" | "auth" | "payment" | "integration" | "content";
  titleKey: string;
  descriptionKey?: string;
  options: CalculatorOption[];
};

const price = (min: number, max = min): Price => ({ min, max });

// Az árak és választási lehetőségek ezen a helyen szabadon szerkeszthetők.
// Új opciónál csak adj hozzá egy objektumot, majd vedd fel a labelKey fordítását az i18n.ts fájlba.
export const calculatorGroups: CalculatorGroup[] = [
  {
    id: "projectType",
    titleKey: "calculatorPage.groups.projectType.title",
    options: [
      {
        id: "landing",
        labelKey: "calculatorPage.options.projectType.landing",
        oneTime: price(40_000),
        withOperation: price(10_000),
      },
      {
        id: "webshop",
        labelKey: "calculatorPage.options.projectType.webshop",
        oneTime: price(200_000),
        withOperation: price(40_000),
      },
      {
        id: "webapp",
        labelKey: "calculatorPage.options.projectType.webapp",
        oneTime: price(100_000, 250_000),
        withOperation: price(30_000, 70_000),
      },
      {
        id: "mobile",
        labelKey: "calculatorPage.options.projectType.mobile",
        oneTime: price(150_000, 400_000),
        withOperation: price(50_000, 100_000),
      },
    ],
  },
  {
    id: "design",
    titleKey: "calculatorPage.groups.design.title",
    options: [
      {
        id: "yes",
        labelKey: "calculatorPage.options.design.yes",
        oneTime: price(0),
        withOperation: price(0),
      },
      {
        id: "no",
        labelKey: "calculatorPage.options.design.no",
        oneTime: price(15_000),
        withOperation: price(0),
      },
    ],
  },
  {
    id: "auth",
    titleKey: "calculatorPage.groups.auth.title",
    descriptionKey: "calculatorPage.groups.auth.description",
    options: [
      {
        id: "none",
        labelKey: "calculatorPage.options.auth.none",
        oneTime: price(0),
        withOperation: price(0),
      },
      {
        id: "user",
        labelKey: "calculatorPage.options.auth.user",
        oneTime: price(5_000),
        withOperation: price(2_500),
      },
      {
        id: "admin",
        labelKey: "calculatorPage.options.auth.admin",
        oneTime: price(15_000),
        withOperation: price(10_000),
      },
      {
        id: "both",
        labelKey: "calculatorPage.options.auth.both",
        oneTime: price(10_000),
        withOperation: price(7_500),
      },
    ],
  },
  {
    id: "payment",
    titleKey: "calculatorPage.groups.payment.title",
    options: [
      {
        id: "none",
        labelKey: "calculatorPage.options.payment.none",
        oneTime: price(0),
        withOperation: price(0),
      },
      {
        id: "card",
        labelKey: "calculatorPage.options.payment.card",
        oneTime: price(25_000),
        withOperation: price(5_000),
      },
      {
        id: "subscription",
        labelKey: "calculatorPage.options.payment.subscription",
        oneTime: price(40_000),
        withOperation: price(10_000),
      },
      {
        id: "multiple",
        labelKey: "calculatorPage.options.payment.multiple",
        oneTime: price(60_000),
        withOperation: price(15_000),
      },
    ],
  },
  {
    id: "integration",
    titleKey: "calculatorPage.groups.integration.title",
    options: [
      {
        id: "none",
        labelKey: "calculatorPage.options.integration.none",
        oneTime: price(0),
        withOperation: price(0),
      },
      {
        id: "billing",
        labelKey: "calculatorPage.options.integration.billing",
        oneTime: price(15_000),
        withOperation: price(2_500),
      },
      {
        id: "crm",
        labelKey: "calculatorPage.options.integration.crm",
        oneTime: price(25_000),
        withOperation: price(5_000),
      },
      {
        id: "erp",
        labelKey: "calculatorPage.options.integration.erp",
        oneTime: price(40_000),
        withOperation: price(10_000),
      },
      {
        id: "api",
        labelKey: "calculatorPage.options.integration.api",
        oneTime: price(20_000),
        withOperation: price(5_000),
      },
    ],
  },
  {
    id: "content",
    titleKey: "calculatorPage.groups.content.title",
    options: [
      {
        id: "small",
        labelKey: "calculatorPage.options.content.small",
        oneTime: price(0),
        withOperation: price(0),
      },
      {
        id: "medium",
        labelKey: "calculatorPage.options.content.medium",
        oneTime: price(20_000),
        withOperation: price(5_000),
      },
      {
        id: "large",
        labelKey: "calculatorPage.options.content.large",
        oneTime: price(50_000),
        withOperation: price(15_000),
      },
    ],
  },
];

export const operationMonthlyPrice = price(20_000);
