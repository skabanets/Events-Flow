export const getMinBirthDate = (): string => {
  const date = new Date();
  date.setFullYear(date.getFullYear() - 100);

  return date.toISOString().split('T')[0];
};
