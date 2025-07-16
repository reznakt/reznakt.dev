import random from "random";
import { useMemo } from "react";
import cells from "vanta/dist/vanta.cells.min";
import { WordRotate } from "../magicui/word-rotate";
import { Section } from "../section";

export function TechnologySection(): React.ReactElement {
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
      name="Technology"
      vanta={{
        effect: cells,
        effectOptions: { color1: 0x000000, color2: 0x6f00ff },
      }}
    >
      <div>
        <h1 className="mb-4 text-5xl font-bold">Technology</h1>
        <div className="max-w-xl mx-auto flex items-center">
          Building software in
          <div className="m-2 font-bold text-purple-400 inline-block">
            <WordRotate words={shuffledTechnologies} />
          </div>
        </div>
      </div>
    </Section>
  );
}
