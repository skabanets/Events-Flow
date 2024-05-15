import { Card } from '../../components';

import { getFormattedDate } from '../../helpers';
import { IParticipant } from '../../types';

interface IParticipantCardProps {
  participant: IParticipant;
}

export const ParticipantCard = ({ participant }: IParticipantCardProps) => {
  const { fullName, email, dateOfRegistration } = participant;
  return (
    <Card>
      <h2 className="card-title title line-clamp-1">{fullName}</h2>
      <p>{email}</p>
      <p>Date of registration: {getFormattedDate(dateOfRegistration.toString())}</p>
    </Card>
  );
};
