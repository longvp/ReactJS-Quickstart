import { ReactNode } from 'react';

interface ITitleProps {
  className?: string;
  children: ReactNode;
}

const Title = (props: ITitleProps) => {
  const { className, children } = props;

  return <p className={`title ${className || ''}`}>{children}</p>;
};

export default Title;
