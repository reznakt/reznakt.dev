import waves from "vanta/dist/vanta.waves.min";
import { Section } from "../section";

export function EducationSection(): React.ReactElement {
  return (
    <Section
      name="Education"
      vanta={{ effect: waves, effectOptions: { gyroControls: true } }}
    >
      <div>
        <h1 className="mb-4 text-5xl font-bold">Education</h1>
        <p className="mx-auto max-w-xl">
          This is what I've learned over the years...
        </p>
      </div>
    </Section>
  );
}
