import { useEffect, useState } from 'react';
import { GoBackLink, Loader, PageTitle, ParticipantsList } from '../../components';
import { getEvent, getPaparticipants } from '../../services/api';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { IParticipant } from '../../types';

import { BarChart } from '@mui/x-charts';
import { getCountParticipantsByDate, getLastWeekDates, getWeekdays } from '../../helpers';

const Participants = () => {
  const { eventId } = useParams<{ eventId: string }>();
  const [eventTitle, setEventTitle] = useState<string>('');
  const [participants, setParticipants] = useState<IParticipant[]>([]);
  const [dateArr, setDateArr] = useState<string[]>([]);
  const [participantsByDate, setParticipantsByDate] = useState<number[]>([]);

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

  useEffect(() => {
    if (participants) {
      const dates = getLastWeekDates();
      setDateArr(dates);
      const participantsCount = getCountParticipantsByDate(dates, participants);
      setParticipantsByDate(participantsCount);
    }
  }, [participants]);

  if (!eventId || eventTitle === '') return <Loader />;

  return (
    <div className="page-wrapper">
      <PageTitle title={`"${eventTitle}" participants`} />
      <GoBackLink />
      {participants.length !== 0 ? (
        <>
          <div className="card mt-[10px] bg-blue-100 shadow-md">
            <h2 className="title text-xl pt-[20px] pl-[20px]">Participants per week:</h2>
            <BarChart
              xAxis={[{ scaleType: 'band', data: getWeekdays(dateArr) }]}
              series={[{ data: participantsByDate }]}
              height={200}
              colors={['#3b81f6']}
              className="w-full"
            />
          </div>
          <ParticipantsList participants={participants} />
        </>
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
