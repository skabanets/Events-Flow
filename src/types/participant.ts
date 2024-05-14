enum Source {
  SocialMedia = 'Social media',
  Friends = 'Friends',
  FoundMyself = 'Found myself',
}

export interface Participant {
  _id: string;
  email: string;
  dateOfBirth: Date;
  dateOfRegistration: Date;
  eventSource: Source;
  eventId: string;
}
