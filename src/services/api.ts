import axios from 'axios';
import { Event, EventWithoutId, Participant, ParticipantWithoutId } from '../types';

export const api = axios.create({
  baseURL: 'https://events-flow-back.onrender.com/api',
});

export const getEvents = async (): Promise<Event[]> => {
  const { data } = await api.get('/events');
  return data;
};

export const getEvent = async (id: string): Promise<Event> => {
  const { data } = await api.get(`/events/${id}`);
  return data;
};

export const addEvent = async (event: EventWithoutId): Promise<Event> => {
  const { data } = await api.post('/events', event);
  return data;
};

export const getPaparticipants = async (): Promise<Participant[]> => {
  const { data } = await api.get('/participants');
  return data;
};
export const addParticipant = async (participant: ParticipantWithoutId): Promise<Participant> => {
  const { data } = await api.post('/participants', participant);
  return data;
};
