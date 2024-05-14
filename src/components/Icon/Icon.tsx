import Icons from '../../assets/sprite.svg';

interface IconProps {
  id: string;
  size: string;
  className?: string;
}

export const Icon = ({ id, size, className }: IconProps) => {
  return (
    <svg className={className} height={size} width={size}>
      <use href={Icons + '#icon-' + id}></use>
    </svg>
  );
};
