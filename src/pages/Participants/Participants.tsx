import { useEffect, useState } from 'react';
import { Loader, PageTitle, ParticipantsList } from '../../components';
import { getEvent, getPaparticipants } from '../../services/api';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { IParticipant } from '../../types';

const Participants = () => {
  const { eventId } = useParams<{ eventId: string }>();
  const [eventTitle, setEventTitle] = useState<string>('');
  const [participants, setParticipants] = useState<IParticipant[]>([]);

  useEffect(() => {
    if (eventId) {
      getEvent(eventId)
        .then(res => setEventTitle(res.title))
        .catch(() => toast.error('Something went wrong. Reload page or try again late!'));

      getPaparticipants(eventId)
        .then(setParticipants)
        .catch(() => toast.error('Something went wrong. Reload page or try again late!'));
    }
  }, [eventId]);

  console.log(participants);

  if (!eventId || eventTitle === '') return <Loader />;

  return (
    <div className="page-wrapper">
      <PageTitle title={`"${eventTitle}" participants`} />
      {participants.length !== 0 ? (
        <ParticipantsList participants={participants} />
      ) : (
        <div className="h-[85vh] w-full flex-center">
          <div className="card w-96 h-[200px] shadow-xl bg-white flex-center">
            <div className="flex flex-col items-center text-center gap-2">
              <p className="h-fit font-nunito-medium text-base">
                No participants registered for this event yet.
                <br />
                Be the first one to join!
                <br />
              </p>
              <Link to={`/registration/${eventId}`} className="navigate-link">
                Registrations
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Participants;
