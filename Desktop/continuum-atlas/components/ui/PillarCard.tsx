import Link from 'next/link';
import React from 'react';

type PillarCardProps = {
  label: string;
  title: string;
  body: string;
  href: string;
};

const PillarCard: React.FC<PillarCardProps> = ({
  label,
  title,
  body,
  href
}) => {
  return (
    <Link href={href} className="pillar-card">
      <div className="pillar-tag">{label}</div>
      <div className="pillar-title">{title}</div>
      <p className="pillar-body">{body}</p>
      <div className="pillar-cta">
        Enter{' '}
        <span className="pillar-cta-arrow">↳</span>
      </div>
    </Link>
  );
};

export default PillarCard;
