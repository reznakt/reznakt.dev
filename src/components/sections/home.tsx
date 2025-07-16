import net from "vanta/dist/vanta.net.min";
import { AuroraText } from "../magicui/aurora-text";
import { Section } from "../section";

export function HomeSection(): React.ReactElement {
  return (
    <Section
      name="Home"
      vanta={{
        effect: net,
        effectOptions: {
          backgroundColor: 0x202020,
          color: 0x5070fc,
          gyroControls: true,
        },
      }}
    >
      <div>
        <h1 className="mb-4 text-5xl font-bold">
          Hi, I'm
          <AuroraText className="m-2">Tom</AuroraText>
        </h1>
        <p className="mx-auto max-w-xl">
          I'm a web developer passionate about interactive design.
        </p>
      </div>
    </Section>
  );
}
