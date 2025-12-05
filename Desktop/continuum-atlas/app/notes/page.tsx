import Section from '@layout/Section';
import SectionHeader from '@ui/SectionHeader';
import TextBlock from '@ui/TextBlock';

export default function NotesPage() {
  return (
    <>
      <Section>
        <SectionHeader
          eyebrow="Hall III"
          title="Architect's Notes"
          sub="Interpretive outputs of the Continuum — essays, reflections, and distilled principles."
        />
        <TextBlock>
          <p>
            This hall gathers the narrative layer of the Atlas: essays on
            structure and velocity, notes on building systems, and brief
            commentaries on projects born in the Continuum. It explains how the
            frameworks feel from the inside.
          </p>
        </TextBlock>
      </Section>

      <Section>
        <SectionHeader title="Featured Themes" />
        <TextBlock>
          <ul>
            <li>On Structure — clarity as something you build, not find.</li>
            <li>On Velocity — momentum as a cognitive state.</li>
            <li>
              Project Overviews — AI Mind OS, NeuroSprint, and other Continuum
              artifacts.
            </li>
          </ul>
        </TextBlock>
      </Section>
    </>
  );
}
