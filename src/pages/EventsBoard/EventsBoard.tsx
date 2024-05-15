import { useEffect, useState } from 'react';
import { getEvents } from '../../services/api';

import { EventsCardsList, Loader } from '../../components';
import { IEvent } from '../../types';
import { toast } from 'react-toastify';

const EventsBoard = () => {
  const [events, setEvents] = useState<IEvent[]>([]);
  const [page, setPage] = useState<number>(1);
  const [fetching, setFetching] = useState<boolean>(true);
  const [totalEvents, setTotalEvens] = useState<number>(0);

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
  }, [fetching, totalEvents]);

  useEffect(() => {
    if (fetching) {
      getEvents(page)
        .then(res => {
          setEvents(prevEvents => [...prevEvents, ...res.events]);
          setPage(prevState => prevState + 1);
          setTotalEvens(res.totalCount);
        })
        .catch(() => {
          events;
          toast.error('Something went wrong. Reload page or try again late!');
        })
        .finally(() => {
          setFetching(false);
        });
    }
  }, [fetching, page]);

  if (!events.length) return <Loader />;

  if (page !== 1 && events.length === totalEvents) toast.warning('All events have been loaded!');

  return (
    <div className="container py-[20px]">
      <h1 className="text-2xl">Events-board</h1>
      {events.length !== 0 ? (
        <EventsCardsList events={events} />
      ) : (
        <div className="h-[80vh] w-[100wh] flex-center bg-slate-600">
          <div className="card w-96 h-[200px] shadow-xl bg-red-300">
            <div className="card-body flex-center text-center">
              <h2 className="card-title">
                No events found. <br />
                Please try again later.
              </h2>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventsBoard;
