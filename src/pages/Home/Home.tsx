import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleClickButton = () => {
    navigate('events-board');
  };

  return (
    <div>
      <div className="hero h-[90vh] ">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="font-nunito-semibold text-4xl text-gray-900">Welcome to Events-Flow!</h1>
            <p className="py-6">
              Events-Flow is your premier event registration platform, meticulously crafted for
              individuals who prioritize their time and seek to stay informed about the latest
              events. It offers a straightforward and convenient means to browse, register for, and
              participate in a wide array of events. Join Events-Flow now and immerse yourself in a
              world of captivating experiences!
            </p>
            <Link to={'/events-board'} className="navigate-link">
              To Events-board
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
