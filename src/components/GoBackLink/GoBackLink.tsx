import { Link } from 'react-router-dom';
import { IoMdArrowRoundBack } from 'react-icons/io';

export const GoBackLink: React.FC = () => {
  return (
    <Link to="/events-board" className="text-blue-500 hover:text-blue-600 flex my-[5px] underline">
      <IoMdArrowRoundBack />
      Go Back
    </Link>
  );
};
