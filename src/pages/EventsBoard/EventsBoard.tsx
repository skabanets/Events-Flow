import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { EventsList, Loader, PageTitle, SortField } from '../../components';

import { getEvents } from '../../services/api';
import { IEvent } from '../../types';

const EventsBoard = () => {
  const [events, setEvents] = useState<IEvent[]>([]);
  const [page, setPage] = useState<number>(1);
  const [fetching, setFetching] = useState<boolean>(true);
  const [totalEvents, setTotalEvens] = useState<number>(0);
  const [sortData, setSortData] = useState<string>('');

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
      getEvents(page, sortData)
        .then(res => {
          setEvents(prevEvents => [...prevEvents, ...res.events]);
          setPage(prevState => prevState + 1);
          setTotalEvens(res.totalEvents);
        })
        .catch(() => {
          toast.error('Something went wrong. Reload page or try again late!');
        })
        .finally(() => {
          setFetching(false);
        });
    }
  }, [fetching, page, sortData]);

  const handleChangeSort = (data: string): void => {
    setSortData(data);
    setEvents([]);
    setPage(1);
    setFetching(true);
  };

  if (!events.length) return <Loader />;

  if (page !== 1 && events.length === totalEvents) toast.warning('All events have been loaded!');

  return (
    <div className="page-wrapper">
      <div className="flex justify-between items-center">
        <PageTitle title="Events-board" />
        {events.length !== 0 && <p>Total events: {totalEvents}</p>}
      </div>
      <SortField handleChangeSort={handleChangeSort} sortData={sortData} />
      {events.length !== 0 ? (
        <EventsList events={events} />
      ) : (
        <div className="h-[85vh] w-full flex-center bg-slate-600">
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
