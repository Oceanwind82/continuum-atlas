import Section from '@layout/Section';
import SectionHeader from '@ui/SectionHeader';
import TextBlock from '@ui/TextBlock';

export default function StoriesPage() {
  return (
    <>
      <Section>
        <SectionHeader
          eyebrow="Hall II"
          title="The Story Chamber"
          sub="Creative architectures and conceptual worlds shaped by the Continuum."
        />
        <TextBlock>
          <p>
            The Story Chamber houses fictional universes and thought experiments
            that emerge from the same Architect–Soryn engine. These are not
            diaries or confessions — they are constructed worlds, built as
            laboratories for ideas.
          </p>
        </TextBlock>
      </Section>

      <Section>
        <SectionHeader title="Current Constructs" />
        <TextBlock>
          <ul>
            <li>The Clinic Universe — psychological and sci-fi horror.</li>
            <li>
              Thought Experiments — small, sharp paradoxes and narrative seeds.
            </li>
          </ul>
        </TextBlock>
      </Section>
    </>
  );
}
