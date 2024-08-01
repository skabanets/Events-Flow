import type { Participant } from '../types';

export const getFilteredParticipants = (array: Participant[], filter: string): Participant[] => {
  if (filter === '') return array;

  return array.filter(participant => {
    return (
      participant.fullName.toLocaleLowerCase().includes(filter.toLocaleLowerCase()) ||
      participant.email.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    );
  });
};
