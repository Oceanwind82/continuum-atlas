import React from 'react';

type Props = {
  children: React.ReactNode;
};

const TextBlock: React.FC<Props> = ({ children }) => {
  return <div className="text-block">{children}</div>;
};

export default TextBlock;
