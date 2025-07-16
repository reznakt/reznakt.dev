import waves from "vanta/dist/vanta.waves.min";
import { Section } from "../section";

export function EducationSection(): React.ReactElement {
  return (
    <Section name="Education" vanta={{ effect: waves, effectOptions: {} }}>
      <div>
        <h1 className="text-5xl font-bold mb-4">Education</h1>
        <p className="max-w-xl mx-auto">
          This is what I've learned over the years...
        </p>
      </div>
    </Section>
  );
}
