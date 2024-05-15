export interface IEvent {
  _id: string;
  title: string;
  description: string;
  eventDate: Date;
  organaizer: string;
  participants: string[];
}

export interface IEventWithoutId extends Omit<Event, '_id'> {}

export interface IEventsRes {
  events: IEvent[];
  totalEvents: number;
}
