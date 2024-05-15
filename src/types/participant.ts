enum Source {
  SocialMedia = 'Social media',
  Friends = 'Friends',
  FoundMyself = 'Found myself',
}

export interface IParticipant {
  _id: string;
  fullName: string;
  email: string;
  dateOfBirth: Date;
  dateOfRegistration: Date;
  eventSource: Source;
  eventId: string;
}

export interface IParticipantRegister {
  fullName: string;
  email: string;
  dateOfBirth: Date;
  dateOfRegistration: Date;
  eventSource: Source;
  eventId: string;
}
