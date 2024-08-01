import { FC } from 'react';

interface PageTitleProps {
  title: string;
}

export const PageTitle: FC<PageTitleProps> = ({ title }) => {
  return <h1 className="text-2xl">{title}</h1>;
};
