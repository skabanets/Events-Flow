import { Icon } from '../../components';

export const Logo = () => {
  return (
    <a className="flex-center gap-1 font-nunito-semibold text-2xl text-blue-600 hover:text-blue-800">
      <Icon id="logo" size="24" className="fill-blue-600 logo" />
      Events-Flow
    </a>
  );
};
