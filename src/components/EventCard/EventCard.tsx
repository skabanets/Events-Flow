import { Link } from 'react-router-dom';
import { getFormattedDate } from '../../helpers/getFormattedDate';
import { IEvent } from '../../types';

interface EventCardProps {
  eventInfo: IEvent;
}

export const EventCard: React.FC<EventCardProps> = ({ eventInfo }) => {
  const { _id, title, description, eventDate, organaizer } = eventInfo;

  const cardLink = 'text-blue-500 hover:text-blue-600 hover:font-bold';

  return (
    <div className="card w-[400px] bg-base-100 shadow-xl">
      <div className="card-body p-[24px] font-nunito-medium">
        <h2 className="card-title title">{title}</h2>
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
      </div>
    </div>
  );
};
