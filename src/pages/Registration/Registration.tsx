import { useParams } from 'react-router-dom';
import { PageTitle } from '../../components';
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

  return (
    <div>
      <PageTitle title={`Registration for the ${eventTitle} event`} />
    </div>
  );
};

export default Registration;
