import Link from 'next/link';
import React from 'react';

const TopNav: React.FC = () => {
  return (
    <header className="nav">
      <div className="nav-title">continuum.atlas</div>
      <nav className="nav-links">
        <Link className="nav-link" href="/soryn">
          Soryn Base
        </Link>
        <Link className="nav-link" href="/systems">
          Systems
        </Link>
        <Link className="nav-link" href="/stories">
          Stories
        </Link>
        <Link className="nav-link" href="/notes">
          Notes
        </Link>
        <Link className="nav-link" href="/fog-corridor">
          Fog Corridor
        </Link>
        <Link className="nav-link" href="/learning-annex">
          Learning Annex
        </Link>
        <Link className="nav-link" href="/constitution">
          Constitution
        </Link>
      </nav>
    </header>
  );
};

export default TopNav;
