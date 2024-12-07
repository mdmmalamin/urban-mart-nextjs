export const linkString = (name: string) => {
  return name
    .toLowerCase() //? Convert to lowercase
    .replace(/[^a-z0-9\s-]/g, "") //? Remove special characters
    .replace(/\s+/g, "-"); //? Replace spaces with hyphens
};

export const linkToGetId = (url: string) => {
  return url.substring(url.lastIndexOf("-") + 1);
};
