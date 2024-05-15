import { EventCard } from '../../components';
import { IEvent } from '../../types';

interface EventsCardsListProps {
  events: IEvent[];
}

export const EventsCardsList: React.FC<EventsCardsListProps> = ({ events }) => {
  return (
    <ul className="flex flex-wrap gap-[20px] my-[20px]">
      {events?.map(event => (
        <li key={event._id}>
          <EventCard eventInfo={event} />
        </li>
      ))}
    </ul>
  );
};
