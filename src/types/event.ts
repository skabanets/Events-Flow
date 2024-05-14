export interface Event {
  _id: string;
  login: string;
  title: string;
  description: string;
  eventDate: Date;
  organaizer: string;
  participants: string[];
}

export interface EventWithoutId extends Omit<Event, '_id'> {}
