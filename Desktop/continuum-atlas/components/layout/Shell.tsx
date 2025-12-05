'use client';

import React from 'react';

type ShellProps = {
  children: React.ReactNode;
};

const Shell: React.FC<ShellProps> = ({ children }) => {
  return <div className="page-shell">{children}</div>;
};

export default Shell;
