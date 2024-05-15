export const getWeekdays = (dateArr: string[]): string[] => {
  const weekdays: string[] = [];
  const today: number = new Date().getDay();
  const daysOfWeek: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  dateArr.forEach(dateString => {
    const date: Date = new Date(dateString);
    const dayOfWeek: string = daysOfWeek[date.getDay()];

    if (date.getDay() === today) {
      weekdays.push('Today');
    } else {
      weekdays.push(`${date.getDate()}-${dayOfWeek}`);
    }
  });

  return weekdays;
};
