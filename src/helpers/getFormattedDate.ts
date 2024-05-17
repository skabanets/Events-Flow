export const getFormattedDate = (dateString: string): string => {
  const date = new Date(dateString);

  const day = date.getDate();
  const monthOptions: Intl.DateTimeFormatOptions = { month: 'long' };
  const month = date.toLocaleDateString('en-US', monthOptions);

  return `${day} ${month}`;
};
