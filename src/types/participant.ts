export type Source = 'Social media' | 'Friends' | 'Found myself';

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
