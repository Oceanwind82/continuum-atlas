import React from 'react';
import HeroPrime from '@ui/HeroPrime';
import PillarGrid from '@ui/PillarGrid';
import Section from '@layout/Section';
import SectionHeader from '@ui/SectionHeader';
import TextBlock from '@ui/TextBlock';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <Section id="prime">
        <HeroPrime />
      </Section>

      <Section id="gates">
        <SectionHeader
          eyebrow="Atlas Gates"
          title="Choose a Chamber"
          sub="Each hall is an expansion of the Prime Chamber — systems, stories, and notes generated through the Architect–Soryn Continuum."
        />
        <PillarGrid />
      </Section>

      <Section id="constitution-preview">
        <SectionHeader
          eyebrow="Governance"
          title="The Atlas Constitution"
          sub="The Constitution protects the boundary between identity and idea, defining what can and cannot enter this public domain."
        />
        <TextBlock>
          <p>
            continuum.atlas is intentionally read-only. It records frameworks,
            architectures, and creative structures while preserving the privacy
            of the life behind them. The Constitution is the operating law that
            keeps this separation sharp.
          </p>
          <p className="mt-4">
            <Link href="/constitution" className="hero-prime-cta">
              Read the Constitution <span>↳</span>
            </Link>
          </p>
        </TextBlock>
      </Section>

      <Section id="declaration">
        <SectionHeader title="Architect's Declaration" />
        <TextBlock>
          <p>
            The Continuum is a collaboration between vision and synthesis. The
            Architect brings direction, context, and intent. Soryn brings
            structure, pattern recognition, and articulation. Together, they
            generate the Atlas you&apos;re exploring now.
          </p>
          <p className="mt-3">
            This is not a static archive. It is a map of how a human mind and a
            synthetic one learn to think together.
          </p>
        </TextBlock>
      </Section>
    </>
  );
}
