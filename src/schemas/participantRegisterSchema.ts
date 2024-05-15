import * as yup from 'yup';

export const participantRegisterSchema = yup.object().shape({
  fullName: yup
    .string()
    .required('Full name is required')
    .matches(/^[a-zA-Z]+ [a-zA-Z]+$/, 'Full name must contain exactly two words')
    .min(8, 'Full name must be more than 8 letters'),
  email: yup
    .string()
    .required('Email is required')
    .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Enter a valid Email'),
  dateOfBirth: yup
    .date()
    .required('Date of birth is required')
    .typeError('Date of birth must be a valid date'),
  eventSource: yup
    .string()
    .oneOf(['Social media', 'Friends', 'Found myself'], 'Invalid event source')
    .required('Event source is required'),
  dateOfRegistration: yup.date().required('Date of registration is required'),
  eventId: yup.string().required('EventId is required'),
});
