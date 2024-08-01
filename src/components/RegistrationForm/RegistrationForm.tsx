import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';

import { addParticipant } from '../../services/api';
import { participantRegisterSchema } from '../../schemas/participantRegisterSchema';
import { getMaxBirthDate } from '../../helpers';
import type { ParticipantRegister } from '../../types';

interface RegistrationFormPprops {
  id: string;
}

export const RegistrationForm: FC<RegistrationFormPprops> = ({ id }) => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<ParticipantRegister>({
    mode: 'onSubmit',
    resolver: yupResolver(participantRegisterSchema),
  });
  const navigate = useNavigate();

  useEffect(() => {
    setValue('dateOfRegistration', new Date());
    setValue('eventId', id);
  }, [setValue]);

  const navigateToParticipants = () => {
    setTimeout(() => {
      navigate(`/participants/${id}`);
      reset();
    }, 1000);
  };

  const onSubmit = (data: ParticipantRegister) => {
    addParticipant(data)
      .then(() => {
        toast.success('You have successfully registered for the event!');
        navigateToParticipants();
      })
      .catch(error => toast.error(error.response.data.message));
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="card-style p-6 md:p-10 font-nunito-regular gap-5"
    >
      <h1 className="title text-2xl">Event registration</h1>
      <div className="relative">
        <label className="label">
          Full name:
          <input
            className="input-field"
            type="text"
            placeholder="John Wick"
            {...register('fullName')}
          />
        </label>
        <p className="field-error">{errors['fullName']?.message}</p>
      </div>
      <div>
        <label className="label">
          Email:
          <input
            className="input-field"
            type="email"
            placeholder="john.wick@example.com"
            {...register('email')}
          />
        </label>
        <p className="field-error">{errors['email']?.message}</p>
      </div>
      <div>
        <label className="label">
          Date of birth:
          <input
            className="input-field"
            type="date"
            defaultValue="yyyy-mm-dd"
            max={getMaxBirthDate()}
            {...register('dateOfBirth')}
          />
        </label>
        <p className="field-error">{errors['dateOfBirth']?.message}</p>
      </div>
      <div>
        <h2 className="mb-3">Where did you here about this event?</h2>
        <div className="flex flex-col gap-[10px] md:flex-row md:gap-6">
          <label className="flex gap-1">
            <input type="radio" value="Social media" {...register('eventSource')} />
            Social media
          </label>
          <label className="flex gap-1">
            <input type="radio" value="Friends" {...register('eventSource')} />
            Friends
          </label>
          <label className="flex gap-1">
            <input type="radio" value="Found myself" {...register('eventSource')} />
            Found myself
          </label>
        </div>
        <p className="field-error">{errors['eventSource']?.message}</p>
      </div>
      <button className="btn button w-fit px-10 mx-auto" type="submit">
        Register
      </button>
    </form>
  );
};
