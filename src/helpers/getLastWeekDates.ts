export const getLastWeekDates = (): string[] => {
  const currentDate = new Date();
  const dateArray: string[] = [];

  for (let i = 0; i < 7; i++) {
    const previousDate = new Date(currentDate);
    previousDate.setDate(currentDate.getDate() - (6 - i));

    const formattedDate = previousDate.toISOString().slice(0, 10);

    dateArray.push(formattedDate);
  }

  return dateArray;
};
