import { useEffect, useState } from 'react';
import { getEvents } from '../../services/api';
import { Event } from '../../types';
import { Loader } from '../../components';

const EventsBoard = () => {
  const [events, setEvents] = useState<Event[] | null>(null);

  useEffect(() => {
    getEvents().then(setEvents).catch();
  }, []);

  if (!events) return <Loader />;

  return <div>EventsBoard</div>;
};

export default EventsBoard;
