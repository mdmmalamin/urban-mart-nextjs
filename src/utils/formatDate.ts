export function formatDate(isoDate: string): string {
  const date = new Date(isoDate);
  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "long",
    year: "numeric",
  };
  return date.toLocaleDateString("en-GB", options);
}

interface IDateToISO {
  calender: {
    identifier: string;
  };
  era: string;
  day: number;
  month: number;
  year: number;
}

export const dateToISO = (date: IDateToISO) => {
  if (!date) return new Date().toISOString();

  return new Date(`${date.month}-${date.day}-${date.year}`).toISOString();
};

export const dateToString = (date: IDateToISO) => {
  if (!date) return new Date().toISOString();

  return `${date.month}-${date.day}-${date.year}`;
};
