import Section from '@layout/Section';
import SectionHeader from '@ui/SectionHeader';
import TextBlock from '@ui/TextBlock';

export default function SystemsPage() {
  return (
    <>
      <Section>
        <SectionHeader
          eyebrow="Hall I"
          title="The Systems Hall"
          sub="Frameworks, operating models, and cognitive structures produced through the Prime Chamber."
        />
        <TextBlock>
          <p>
            This hall collects the Continuum&apos;s structural thinking —
            mental models, productivity architectures, learning systems, and
            energy principles. Each model is designed to be reusable, composable,
            and independent of personal data.
          </p>
        </TextBlock>
      </Section>

      <Section>
        <SectionHeader title="Framework Categories" />
        <TextBlock>
          <ul>
            <li>Mental Models</li>
            <li>AI Mind OS Concepts</li>
            <li>Productivity Systems</li>
            <li>Learning Structures</li>
            <li>Energy &amp; Training Principles</li>
            <li>Continuum Tools Index</li>
          </ul>
          <p className="mt-3">
            Each category can expand into its own dedicated patterns, diagrams,
            and frameworks as the Atlas evolves.
          </p>
        </TextBlock>
      </Section>
    </>
  );
}
