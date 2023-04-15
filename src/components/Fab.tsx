import { ReactNode } from 'react';

type FabProps = {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
};

const Fab = ({ className, children, onClick }: FabProps) => {
  return (
    <button
      onClick={onClick}
      className={`fixed right-6 bottom-6 z-30 ${className ?? ''}`}
    >
      {children}
    </button>
  );
};

export default Fab;
