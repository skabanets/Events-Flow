import { IParticipant } from '../types';

export const getCountParticipantsByDate = (
  dates: string[],
  participants: IParticipant[]
): number[] => {
  const participantsCount = [];

  for (let i = 0; i < dates.length; i++) {
    const currentDate = dates[i];
    let count = 0;

    for (let j = 0; j < participants.length; j++) {
      const participant = participants[j];
      if (participant.dateOfRegistration.toString().slice(0, 10) === currentDate) {
        count++;
      }
    }

    participantsCount.push(count);
  }

  return participantsCount;
};
