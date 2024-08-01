import { FC } from 'react';

import { EventCard } from '../../components';

import type { Event } from '../../types';

interface EventsCardsListProps {
  events: Event[];
}

export const EventsList: FC<EventsCardsListProps> = ({ events }) => {
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
