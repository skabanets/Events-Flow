import { useEffect, useState } from 'react';
import { Loader, PageTitle } from '../../components';
import { getEvent, getPaparticipants } from '../../services/api';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const Participants = () => {
  const { eventId } = useParams<{ eventId: string }>();
  const [eventTitle, setEventTitle] = useState<string>('');

  useEffect(() => {
    if (eventId) {
      getEvent(eventId)
        .then(res => setEventTitle(res.title))
        .catch(() => toast.error('Something went wrong. Reload page or try again late!'));

      getPaparticipants(eventId).catch(() =>
        toast.error('Something went wrong. Reload page or try again late!')
      );
    }
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
