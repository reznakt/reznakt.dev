import random from "random";
import { useMemo } from "react";
import { WordRotate } from "../magicui/word-rotate";
import { Section } from "../section";
import halo from "vanta/dist/vanta.halo.min";

export function ProjectsSection(): React.ReactElement {
  const technologies = [
    "C",
    "JavaScript",
    "Node",
    "Python",
    "React",
    "TypeScript",
  ];

  const shuffledTechnologies = useMemo(() => {
    return random.shuffle(technologies);
  }, [technologies]);

  return (
    <Section
      name="Projects"
      vanta={{
        effect: halo,
        effectOptions: { gyroControls: true, xOffset: 0.25 },
      }}
    >
      <div>
        <h1 className="mb-4 text-5xl font-bold">Projects</h1>
        <p className="mx-auto flex max-w-xl items-center">
          Building software in
          <span className="m-2 inline-block font-bold text-purple-400">
            <WordRotate words={shuffledTechnologies} />
          </span>
        </p>
      </div>
    </Section>
  );
}
