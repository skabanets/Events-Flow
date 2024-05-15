import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa6';

export const ScrollUpButton = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      if (scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollUp}
      className={
        !isVisible
          ? 'hidden'
          : 'flex justify-center items-center fixed right-4 bottom-4 md:right-[40px] lg:bottom-[40px] lg:right-[30px] md:bottom-[30px] text-white rounded-full w-12 h-12 transition duration-250 shadow-md bg-blue-500 hover:bg-blue-600'
      }
    >
      <FaArrowUp />
    </button>
  );
};
