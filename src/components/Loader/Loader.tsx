import { Oval } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div className="flex items-center justify-center fixed bg-black backdrop-blur-[1px] bg-opacity-50 w-screen h-screen left-0 top-0 z-50">
      <Oval
        visible={true}
        height="80"
        width="80"
        color="#3b81f6"
        secondaryColor="#2563eb"
        ariaLabel="oval-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};
