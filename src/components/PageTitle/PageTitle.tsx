interface IPageTitleProps {
  title: string;
}

export const PageTitle = ({ title }: IPageTitleProps) => {
  return <h1 className="text-2xl">{title}</h1>;
};
