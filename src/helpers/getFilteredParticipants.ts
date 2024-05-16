import { IParticipant } from '../types';

export const getFilteredParticipants = (array: IParticipant[], filter: string): IParticipant[] => {
  if (filter === '') return array;

  return array.filter(participant => {
    return (
      participant.fullName.toLocaleLowerCase().includes(filter.toLocaleLowerCase()) ||
      participant.email.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    );
  });
};
