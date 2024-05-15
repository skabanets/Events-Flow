import { useEffect, useState } from 'react';
import { Loader, PageTitle } from '../../components';
import { getEvent } from '../../services/api';
import { useParams } from 'react-router-dom';

const Participants = () => {
  const { eventId } = useParams<{ eventId: string }>();
  const [eventTitle, setEventTitle] = useState<string>('');

  useEffect(() => {
    eventId &&
      getEvent(eventId)
        .then(res => setEventTitle(res.title))
        .catch();
  }, [eventId]);

  console.log(eventId);

  if (!eventId || eventTitle === '') return <Loader />;

  return (
    <div className="page-wrapper">
      <PageTitle title={`"${eventTitle}" participants`} />
    </div>
  );
};

export default Participants;
