import React from 'react';

type Props = {
  eyebrow?: string;
  title: string;
  sub?: string;
};

const SectionHeader: React.FC<Props> = ({ eyebrow, title, sub }) => {
  return (
    <header>
      {eyebrow && <div className="section-header-eyebrow">{eyebrow}</div>}
      <h2 className="section-header-title">{title}</h2>
      {sub && <p className="section-header-sub">{sub}</p>}
    </header>
  );
};

export default SectionHeader;
