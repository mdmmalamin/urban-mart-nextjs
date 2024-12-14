export const hideString = (item: string) => {
  const len = item?.length;

  if (len <= 5) {
    return item;
  }

  const [localPart, domainPart] = item.split("@");

  if (localPart && domainPart) {
    const firstTwo = item.substring(0, 2);
    const hiddenLocalPart = "*".repeat(localPart.length - 2);

    return `${firstTwo}${hiddenLocalPart}@${domainPart}`;
  }

  const firstThree = item.substring(0, 3);
  const lastTwo = item.substring(len - 2);
  const dots = "*".repeat(len - 5);

  return `${firstThree}${dots}${lastTwo}`;
};
