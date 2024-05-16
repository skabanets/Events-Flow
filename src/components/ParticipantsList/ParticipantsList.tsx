import { ParticipantCard } from '../../components';
import { IParticipant } from '../../types';

interface IParticipantsListProps {
  participants: IParticipant[];
}

export const ParticipantsList = ({ participants }: IParticipantsListProps) => {
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
