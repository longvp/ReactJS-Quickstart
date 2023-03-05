import { ReactNode } from 'react';

interface IContainerProps {
  className?: string;
  children: ReactNode;
}

const Container = (props: IContainerProps) => {
  const { className, children } = props;

  return <div className={`title ${className || ''}`}>{children}</div>;
};

export default Container;
