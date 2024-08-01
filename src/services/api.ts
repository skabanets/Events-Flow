import axios from 'axios';
import type { Event, EventWithoutId, EventsRes, Participant, ParticipantRegister } from '../types';

export const api = axios.create({
  baseURL: 'https://events-flow-back.onrender.com/api',
});

export const getEvents = async (page: number, sortData: string): Promise<EventsRes> => {
  const params = {
    page,
    limit: 12,
  };

  const { data } = await api.get(`/events?${sortData}`, { params });
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

export const getPaparticipants = async (eventId: string): Promise<Participant[]> => {
  const { data } = await api.get(`/participants?eventId=${eventId}`);
  return data;
};

export const addParticipant = async (participant: ParticipantRegister): Promise<Participant> => {
  const { data } = await api.post('/participants', participant);
  return data;
};
