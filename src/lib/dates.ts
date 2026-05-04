const now = new Date();

export const BUILD_DATE_ISO = now.toISOString().split("T")[0];

export const BUILD_MONTH_YEAR = now.toLocaleDateString("en-US", {
  month: "long",
  year: "numeric",
});

export const BUILD_YEAR = now.getFullYear().toString();
