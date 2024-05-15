import { ReactNode } from 'react';

interface ICardProps {
  children: ReactNode;
}
export const Card: React.FC<ICardProps> = ({ children }) => {
  return (
    <div className="card-style w-[335px] md:w-[342px] lg:w-[400px]">
      <div className="card-body p-[24px] font-nunito-medium min-h-[160px]">{children}</div>
    </div>
  );
};
