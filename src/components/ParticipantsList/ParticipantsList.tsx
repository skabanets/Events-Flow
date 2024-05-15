import { ParticipantCard } from '..';
import { IParticipant } from '../../types';

interface ParticipantsListProps {
  participants: IParticipant[];
}

export const ParticipantsList: React.FC<ParticipantsListProps> = ({ participants }) => {
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
