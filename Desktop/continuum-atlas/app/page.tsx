import React from 'react';
import HeroPrime from '@ui/HeroPrime';
import { AtlasCard } from '@components/AtlasCard';
import Section from '@layout/Section';
import SectionHeader from '@ui/SectionHeader';
import TextBlock from '@ui/TextBlock';
import Link from 'next/link';

export default function HomePage() {
  const cards = [
    {
      href: "/soryn",
      title: "Soryn Base",
      subtitle: "Primary Interface · Your Guide",
      description:
        "The core chamber where you and Soryn think together, make plans, and turn scattered thoughts into mapped reality.",
      tag: "Anchor Chamber",
      accent: "sky" as const,
      icon: "👁️",
    },
    {
      href: "/systems",
      title: "Systems Hall",
      subtitle: "Frameworks · Routines · Structures",
      description:
        "Operating systems for your life, work, money, and projects—documented in a way future-you can actually follow.",
      tag: "Structure",
      accent: "emerald" as const,
      icon: "⛓️",
    },
    {
      href: "/stories",
      title: "Stories Hall",
      subtitle: "Worlds · Fiction · Narrative Labs",
      description:
        "Fragments of worlds, characters, and long-running narratives that live alongside your real-world architecture.",
      tag: "Narrative",
      accent: "violet" as const,
      icon: "✶",
    },
    {
      href: "/notes",
      title: "Notes Hall",
      subtitle: "Fragments · Scratchpad · Evidence",
      description:
        "Raw thoughts, research shards, observations, and half-built ideas that might later evolve into full systems or stories.",
      tag: "Fragments",
      accent: "amber" as const,
      icon: "✎",
    },
    {
      href: "/constitution",
      title: "Atlas Constitution",
      subtitle: "Rules · Boundaries · Governance",
      description:
        "What the Atlas is allowed to hold, what stays private, and how your inner world and public work stay cleanly separated.",
      tag: "Governance",
      accent: "emerald" as const,
      icon: "⚖️",
    },
    {
      href: "/fog-corridor",
      title: "The Fog Corridor",
      subtitle: "Sticky Mind · Sticky Tools",
      description:
        "A map of mental and technical fog: confusion loops, tool gaslighting, ADHD haze, and the counter-moves that pull you back to clarity.",
      tag: "Cognitive Navigation",
      accent: "violet" as const,
      icon: "☁️",
    },
    {
      href: "/learning-annex",
      title: "Learning Annex",
      subtitle: "Code · AI · Empire-Building",
      description:
        "Your private academy for learning to code, wield AI well, and assemble the skills needed to build your own empire from scratch.",
      tag: "Skill Expansion",
      accent: "sky" as const,
      icon: "📚",
    },
  ];

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
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <AtlasCard key={card.href} {...card} />
          ))}
        </div>
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
