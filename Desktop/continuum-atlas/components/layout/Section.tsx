import React from 'react';

type SectionProps = {
  children: React.ReactNode;
  id?: string;
};

const Section: React.FC<SectionProps> = ({ children, id }) => {
  return (
    <section id={id} className="section">
      {children}
    </section>
  );
};

export default Section;
