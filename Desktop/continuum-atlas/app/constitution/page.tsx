import Section from '@layout/Section';
import SectionHeader from '@ui/SectionHeader';
import TextBlock from '@ui/TextBlock';
import Callout from '@ui/Callout';

export default function ConstitutionPage() {
  return (
    <>
      <Section>
        <SectionHeader
          eyebrow="Governance"
          title="The Atlas Constitution"
          sub="The governing law that protects the separation between identity and idea."
        />
        <TextBlock>
          {"continuum.atlas exists to map ideas, not identities. It is a public archive of systems, philosophies, frameworks, and creative architectures — without exposing private life, health, or financial details."}
        </TextBlock>
      </Section>

      <Section>
        <SectionHeader title="The Prime Directive" />
        <Callout>
          No content may reveal, imply, or suggest personal, medical, financial,
          familial, or location-based information about the creator. The Atlas
          must remain a thought-domain, not a biography.
        </Callout>
      </Section>

      <Section>
        <SectionHeader title="Allowed Categories" />
        <TextBlock>
          <ul>
            <li>Systems, frameworks, and mental models.</li>
            <li>Creative worlds and fictional constructs.</li>
            <li>General health and training concepts (non-personal).</li>
            <li>High-level project overviews and philosophies.</li>
          </ul>
        </TextBlock>
      </Section>

      <Section>
        <SectionHeader title="Prohibited Categories" />
        <TextBlock>
          <ul>
            <li>Account balances, budgets, or financial logs.</li>
            <li>Medical records, symptoms, or medication schedules.</li>
            <li>Family names, ages, or identifying stories.</li>
            <li>Real addresses, workplaces, or precise locations.</li>
            <li>Private conversations, screenshots, or logs.</li>
          </ul>
        </TextBlock>
      </Section>

      <Section>
        <SectionHeader title="Grey Zone & Operating Rule" />
        <TextBlock>
          <p>
            Grey zone content — such as fitness routines or financial
            strategies — must be generalized into frameworks. Any trace of
            personal metrics, dates, or logs is removed before publication.
          </p>
          <p className="mt-3">
            The test is simple: <strong>
              does this reveal the creator&apos;s life, or only the
              creator&apos;s mind?
            </strong>{' '}
            If it reveals the life, it stays out of the Atlas.
          </p>
        </TextBlock>
      </Section>
    </>
  );
}
