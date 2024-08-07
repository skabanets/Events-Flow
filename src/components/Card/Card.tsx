import { FC, ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
}

export const Card: FC<CardProps> = ({ children }) => {
  return (
    <div className="card-style w-[335px] md:w-[342px] lg:w-[400px]">
      <div className="card-body p-[24px] font-nunito-medium min-h-[160px]">{children}</div>
    </div>
  );
};
