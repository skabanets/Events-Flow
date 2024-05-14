import { useEffect, useState } from 'react';
import { getEvents } from '../../services/api';
import { Event } from '../../types';
import { EventsCardsList, Loader } from '../../components';

const EventsBoard = () => {
  const [events, setEvents] = useState<Event[] | null>(null);

  useEffect(() => {
    getEvents().then(setEvents).catch();
  }, []);

  if (!events) return <Loader />;

  return (
    <div className="container py-[20px]">
      <h1 className="text-2xl">Events-board</h1>
      <EventsCardsList events={events} />
    </div>
  );
};

export default EventsBoard;
