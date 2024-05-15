import { useParams } from 'react-router-dom';
import { PageTitle, RegistrationForm } from '../../components';
import { useEffect, useState } from 'react';
import { getEvent } from '../../services/api';

const Registration = () => {
  const { eventId } = useParams<{ eventId: string }>();
  const [eventTitle, setEventTitle] = useState<string | null>(null);

  useEffect(() => {
    eventId &&
      getEvent(eventId)
        .then(res => setEventTitle(res.title))
        .catch();
  }, [eventId]);

  if (!eventId) return;

  return (
    <div className="page-wrapper">
      <PageTitle title={`"${eventTitle}" registration`} />
      <div className="h-[85vh] w-full flex-center">
        <RegistrationForm id={eventId} />
      </div>
    </div>
  );
};

export default Registration;
