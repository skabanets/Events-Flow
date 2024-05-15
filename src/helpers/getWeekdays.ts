export const getWeekdays = (dateArr: string[]): string[] => {
  const weekdays: string[] = [];
  const today: number = new Date().getDay();

  dateArr.forEach(dateString => {
    const date: Date = new Date(dateString);

    if (date.getDay() === today) {
      weekdays.push('Today');
    } else {
      weekdays.push(`${date.getDate()}`);
    }
  });

  return weekdays;
};
