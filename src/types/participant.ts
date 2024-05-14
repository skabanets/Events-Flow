enum Source {
  SocialMedia = 'Social media',
  Friends = 'Friends',
  FoundMyself = 'Found myself',
}

export interface IParticipant {
  _id: string;
  email: string;
  dateOfBirth: Date;
  dateOfRegistration: Date;
  eventSource: Source;
  eventId: string;
}

export interface IParticipantWithoutId extends Omit<Event, '_id'> {}
