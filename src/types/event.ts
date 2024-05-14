export interface IEvent {
  _id: string;
  login: string;
  title: string;
  description: string;
  eventDate: Date;
  organaizer: string;
  participants: string[];
}

export interface IEventWithoutId extends Omit<Event, '_id'> {}
