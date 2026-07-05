import halo from "vanta/dist/vanta.halo.min";
import { Section } from "../section";

const vanta = { effect: halo, effectOptions: { xOffset: 0.25 } };

export function ProjectsSection(): React.ReactElement {
  return (
    <Section name="Projects" vanta={vanta}>
      <div>
        <h2 className="text-5xl font-bold mb-4">Projects</h2>
        <p className="mx-auto flex max-w-xl items-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
    </Section>
  );
}
