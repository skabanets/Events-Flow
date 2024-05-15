import { EventCard } from '..';
import { IEvent } from '../../types';

interface EventsCardsListProps {
  events: IEvent[];
}

export const EventsList: React.FC<EventsCardsListProps> = ({ events }) => {
  return (
    <ul className="flex flex-wrap gap-[20px] my-[20px]">
      {events.length !== 0 &&
        events?.map(event => (
          <li key={event._id}>
            <EventCard eventInfo={event} />
          </li>
        ))}
    </ul>
  );
};
