import { Card } from '../../components';
import { getFormattedDate } from '../../helpers/getFormattedDate';
import { IParticipant } from '../../types';

interface ParticipantCardProps {
  participant: IParticipant;
}

export const ParticipantCard: React.FC<ParticipantCardProps> = ({ participant }) => {
  const { fullName, email, dateOfRegistration } = participant;
  return (
    <Card>
      <h2 className="card-title title line-clamp-1">{fullName}</h2>
      <p>{email}</p>
      <p>Date of registration: {getFormattedDate(dateOfRegistration.toString())}</p>
    </Card>
  );
};
