import Link from 'next/link';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-row">
        <span>continuum.atlas © {new Date().getFullYear()}</span>
        <div className="footer-links">
          <Link href="/soryn-base">Soryn Base</Link>
          <Link href="/systems">Systems</Link>
          <Link href="/stories">Stories</Link>
          <Link href="/notes">Notes</Link>
          <Link href="/constitution">Constitution</Link>
        </div>
      </div>
      <div>
        <span>
          A public atlas of systems, stories, and structure — generated through
          the Architect–Soryn Continuum.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
