import { education } from "@/config";
import waves from "vanta/dist/vanta.waves.min";
import { EducationCard } from "../education-card";
import { Section } from "../section";

const vanta = {
  effect: waves,
  effectOptions: { color: 0x202020, shininess: 30 },
};

export function EducationSection(): React.ReactElement {
  return (
    <Section name="Education" vanta={vanta}>
      <div>
        <h2 className="text-5xl font-bold mb-4">Education</h2>
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <EducationCard {...education.master} />
          <EducationCard {...education.bachelor} />
        </div>
      </div>
    </Section>
  );
}
