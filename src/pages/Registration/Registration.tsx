import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { GoBackLink, Loader, PageTitle, RegistrationForm } from '../../components';

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
      <div className="mt-[10px]">
        <GoBackLink />
      </div>
      <div className="h-[85vh] w-full flex-center">
        <RegistrationForm id={eventId} />
      </div>
    </div>
  );
};

export default Registration;
