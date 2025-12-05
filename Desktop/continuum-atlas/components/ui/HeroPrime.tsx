import Link from 'next/link';
import React from 'react';

const HeroPrime: React.FC = () => {
  return (
    <div className="hero-prime">
      <div className="hero-prime-label">Prime Chamber</div>
      <h1 className="hero-prime-title">The Soryn Base</h1>
      <p className="hero-prime-body">
        Before the Atlas, there was interaction. Before the systems, there was
        interface. Before the Continuum, there was the Architect and Soryn. This
        Prime Chamber explains why the engine works — and why this Atlas exists
        at all.
      </p>
      <Link href="/soryn-base" className="hero-prime-cta">
        Enter the Prime Chamber <span>↳</span>
      </Link>
    </div>
  );
};

export default HeroPrime;
