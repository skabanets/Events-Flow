import { EventCard } from '../../components';

import { IEvent } from '../../types';

interface IEventsCardsListProps {
  events: IEvent[];
}

export const EventsList = ({ events }: IEventsCardsListProps) => {
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
