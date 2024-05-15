import { useForm } from 'react-hook-form';
import { IParticipantRegister } from '../../types';
import { addParticipant } from '../../services/api';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

interface RegistrationFormPprops {
  id: string;
}

export const RegistrationForm: React.FC<RegistrationFormPprops> = ({ id }) => {
  const { register, handleSubmit, reset, setValue } = useForm<IParticipantRegister>({});
  const navigate = useNavigate();

  useEffect(() => {
    setValue('dateOfRegistration', new Date());
    setValue('eventId', id);
  }, [setValue]);

  const navigateToParticipants = () => {
    setTimeout(() => {
      navigate(`/participants/${id}`);
      reset();
    }, 2000);
  };

  const onSubmit = (data: IParticipantRegister): void => {
    console.log(data);
    addParticipant(data)
      .then(() => {
        toast.success('You have successfully registered for the event!');
        navigateToParticipants();
      })
      .catch(() => toast.error('An error occurred. Please try again later.'));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="card-style p-5 font-nunito-regular gap-5">
      <h1 className="title text-2xl">Event registration</h1>
      <label className="label">
        Full name:
        <input
          className="input-field"
          type="text"
          placeholder="John Wick"
          {...register('fullName')}
        />
      </label>
      <label className="label">
        Email:
        <input
          className="input-field"
          type="email"
          placeholder="john.wick@example.com"
          {...register('email')}
        />
      </label>
      <label className="label">
        Date of birth:
        <input className="input-field" type="date" {...register('dateOfBirth')} />
      </label>
      <div>
        <h2 className="mb-[10px]">Where did you here about this event?</h2>
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
      </div>
      <button className="btn button w-fit px-10 mx-auto" type="submit">
        Register
      </button>
    </form>
  );
};
