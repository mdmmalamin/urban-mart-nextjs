export const linkString = (name: string) => {
  return name
    ?.toLowerCase() //? Convert to lowercase
    ?.replace(/[^a-z0-9\s-]/g, "") //? Remove special characters
    ?.replace(/\s+/g, "-"); //? Replace spaces with hyphens
};

export const linkToGetId = (url: string) => {
  // return url.substring(url.lastIndexOf("-") + 1);
  const parts = url?.split("-");

  return parts?.slice(-5)?.join("-"); //? Get the last 5 segments
};
