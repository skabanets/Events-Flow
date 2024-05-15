import axios from 'axios';
import { IEvent, IEventWithoutId, IEventsRes, IParticipant, IParticipantWithoutId } from '../types';

export const api = axios.create({
  baseURL: 'https://events-flow-back.onrender.com/api',
});

export const getEvents = async (page: number): Promise<IEventsRes> => {
  const params = {
    page,
    limit: 12,
  };

  const { data } = await api.get('/events', { params });
  return data;
};

export const getEvent = async (id: string): Promise<IEvent> => {
  const { data } = await api.get(`/events/${id}`);
  return data;
};

export const addEvent = async (event: IEventWithoutId): Promise<IEvent> => {
  const { data } = await api.post('/events', event);
  return data;
};

export const getPaparticipants = async (): Promise<IParticipant[]> => {
  const { data } = await api.get('/participants');
  return data;
};
export const addParticipant = async (participant: IParticipantWithoutId): Promise<IParticipant> => {
  const { data } = await api.post('/participants', participant);
  return data;
};
