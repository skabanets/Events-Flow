import { FC } from 'react';
import { Link } from 'react-router-dom';

import { Card } from '../../components';

import { getFormattedDate } from '../../helpers';
import type { Event } from '../../types';

interface EventCardProps {
  eventInfo: Event;
}

export const EventCard: FC<EventCardProps> = ({ eventInfo }) => {
  const { _id, title, description, eventDate, organaizer } = eventInfo;

  const cardLink = 'text-blue-500 hover:text-blue-600 hover:font-bold';

  return (
    <Card>
      <h2 className="card-title title line-clamp-1">{title}</h2>
      <p className="line-clamp-2 text-container">{description}</p>
      <p className="text-sm">Organaizer: {organaizer}</p>
      <p className="text-sm">Date: {getFormattedDate(eventDate.toString())}</p>
      <div className="card-actions justify-between mt-[12px]">
        <Link to={`/registration/${_id}`} className={cardLink}>
          Register
        </Link>
        <Link to={`/participants/${_id}`} className={cardLink}>
          View
        </Link>
      </div>
    </Card>
  );
};
