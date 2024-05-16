import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { RxDoubleArrowRight } from 'react-icons/rx';

import { Loader, PageTitle, RegistrationForm } from '../../components';

import { getEvent } from '../../services/api';

const Registration = () => {
  const { eventId } = useParams<{ eventId: string }>();
  const [eventTitle, setEventTitle] = useState<string>('');

  useEffect(() => {
    eventId &&
      getEvent(eventId)
        .then(res => setEventTitle(res.title))
        .catch(() => toast.error('Something went wrong. Reload page or try again late!'));
  }, [eventId]);

  if (!eventId || eventTitle === '') return <Loader />;

  return (
    <div className="page-wrapper">
      <PageTitle title={`"${eventTitle}" registration`} />
      <div className="flex gap-[2px] mt-[15px]">
        <Link to="/events-board" className="text-blue-500 hover:text-blue-600 flex gap-1 ml-3">
          Events-board
          <RxDoubleArrowRight className="fill-blue-500 size-[18px]" />
        </Link>
        <Link to={`/participants/${eventId}`} className="text-blue-500 hover:text-blue-600">
          Participants
        </Link>
      </div>
      <div className="h-[85vh] w-full flex-center">
        <RegistrationForm id={eventId} />
      </div>
    </div>
  );
};

export default Registration;
