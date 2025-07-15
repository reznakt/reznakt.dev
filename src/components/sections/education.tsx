import waves from "vanta/dist/vanta.waves.min";
import { PageSection } from "../page-section";

export function EducationSection(): React.ReactElement {
  return (
    <PageSection id="education" vanta={{ effect: waves, effectOptions: {} }}>
      <div>
        <h1 className="text-5xl font-bold mb-4">Education</h1>
        <p className="max-w-xl mx-auto">
          This is what I've learned over the years...
        </p>
      </div>
    </PageSection>
  );
}
