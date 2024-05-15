import { useParams } from 'react-router-dom';
import { GoBackLink, Loader, PageTitle, RegistrationForm } from '../../components';
import { useEffect, useState } from 'react';
import { getEvent } from '../../services/api';
import { toast } from 'react-toastify';

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
      <GoBackLink />
      <div className="h-[85vh] w-full flex-center">
        <RegistrationForm id={eventId} />
      </div>
    </div>
  );
};

export default Registration;
