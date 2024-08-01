import { FC } from 'react';

import { ParticipantCard } from '../../components';

import type { Participant } from '../../types';

interface ParticipantsListProps {
  participants: Participant[];
}

export const ParticipantsList: FC<ParticipantsListProps> = ({ participants }) => {
  return (
    <ul className="flex flex-wrap gap-[20px] my-[20px]">
      {participants.length !== 0 &&
        participants?.map(participant => (
          <li key={participant._id}>
            <ParticipantCard participant={participant} />
          </li>
        ))}
    </ul>
  );
};
