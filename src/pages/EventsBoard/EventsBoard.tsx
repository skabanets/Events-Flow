import { useEffect, useState } from 'react';
import { getEvents } from '../../services/api';

import { EventsCardsList, Loader } from '../../components';
import { IEvent } from '../../types';

const EventsBoard = () => {
  const [events, setEvents] = useState<IEvent[]>([]);
  const [page, setPage] = useState<number>(1);
  const [fetching, setFetching] = useState<boolean>(true);
  const [totalEvents, setTotalEvens] = useState<number>(0);
  const [isLoading, setIsloading] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY;
      const documentHeight = document.documentElement.offsetHeight;

      if (scrollPosition >= documentHeight - 100 && !fetching && events.length < totalEvents) {
        setFetching(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [events, fetching, totalEvents]);

  useEffect(() => {
    if (fetching) {
      setIsloading(true);
      getEvents(page)
        .then(res => {
          setEvents(prevEvents => [...prevEvents, ...res.events]);
          setPage(prevState => prevState + 1);
          setTotalEvens(res.totalCount);
        })
        .catch()
        .finally(() => {
          setFetching(false);
          setIsloading(false);
        });
    }
  }, [fetching, page]);

  if (!events.length || isLoading) return <Loader />;

  return (
    <div className="container py-[20px]">
      <h1 className="text-2xl">Events-board</h1>
      <EventsCardsList events={events} />
    </div>
  );
};

export default EventsBoard;
