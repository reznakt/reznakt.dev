import topology from "vanta/dist/vanta.topology.min";
import { Section } from "../section";

const vanta = {
  effect: topology,
  effectOptions: { backgroundColor: 0x000000, color: 0x0000ff },
};

export function ExperienceSection(): React.ReactElement {
  return (
    <Section name="Experience" vanta={vanta}>
      <div>
        <h2 className="mb-4 text-5xl font-bold">Experience</h2>
        <p className="mx-auto flex max-w-xl items-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
    </Section>
  );
}
