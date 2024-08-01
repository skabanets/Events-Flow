export type Source = 'Social media' | 'Friends' | 'Found myself';

export interface Participant {
  _id: string;
  fullName: string;
  email: string;
  dateOfBirth: Date;
  dateOfRegistration: Date;
  eventSource: Source;
  eventId: string;
}

export interface ParticipantRegister extends Omit<Participant, '_id'> {}
