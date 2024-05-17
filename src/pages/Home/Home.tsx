import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div className="hero h-[90vh] ">
        <div className="hero-content text-center">
          <div className="max-w-lg">
            <h1 className="font-nunito-semibold text-4xl text-gray-900">Welcome to Events-Flow!</h1>
            <p className="py-6 text-2xl">
              Streamline your event experience with Events-Flow: Discover, Register, Engage!
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
