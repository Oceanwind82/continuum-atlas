import React from 'react';
import PillarCard from '@ui/PillarCard';

const PillarGrid: React.FC = () => {
  return (
    <div className="pillar-grid">
      <PillarCard
        label="Hall I"
        title="The Systems Hall"
        body="Frameworks, mental models, and operating structures generated through the Prime Chamber."
        href="/systems"
      />
      <PillarCard
        label="Hall II"
        title="The Story Chamber"
        body="Creative architectures and conceptual worlds shaped by the Continuum."
        href="/stories"
      />
      <PillarCard
        label="Hall III"
        title="Architect's Notes"
        body="Essays, reflections, and distilled principles from the Architect–Soryn collaboration."
        href="/notes"
      />
      <PillarCard
        label="Hall IV"
        title="The Fog Corridor"
        body="Cognitive mapping for sticky minds and sticky tools — patterns, clarity, and counter-moves."
        href="/fog-corridor"
      />
      <PillarCard
        label="Hall V"
        title="The Learning Annex"
        body="Code, AI, and empire-building skills — structured paths for continuous expansion."
        href="/learning-annex"
      />
    </div>
  );
};

export default PillarGrid;
