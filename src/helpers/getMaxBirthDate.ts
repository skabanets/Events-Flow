export const getMaxBirthDate = (): string => {
  return new Date().toISOString().split('T')[0];
};
