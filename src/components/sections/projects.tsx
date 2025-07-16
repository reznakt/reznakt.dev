import random from "random";
import { useMemo } from "react";
import halo from "vanta/dist/vanta.halo.min";
import { WordRotate } from "../magicui/word-rotate";
import { Section } from "../section";

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
        <h1 className="text-5xl font-bold mb-4">Projects</h1>
        <p className="max-w-xl mx-auto flex items-center">
          Building software in
          <span className="m-2 font-bold text-purple-400 inline-block">
            <WordRotate words={shuffledTechnologies} />
          </span>
        </p>
      </div>
    </Section>
  );
}
