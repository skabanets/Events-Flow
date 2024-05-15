export const getLastWeekDates = (): string[] => {
  const currentDate = new Date();
  const dateArray: string[] = [];

  for (let i = 0; i < 7; i++) {
    const previousDate = new Date(currentDate);
    previousDate.setDate(currentDate.getDate() - i);

    const formattedDate = previousDate.toISOString().slice(0, 10);

    dateArray.unshift(formattedDate);
  }

  return dateArray;
};
