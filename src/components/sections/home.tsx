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
        <h1 className="text-5xl font-bold mb-4">
          Hi, I'm
          <AuroraText className="m-2">Tom</AuroraText>
        </h1>
        <p className="max-w-xl mx-auto">
          I'm a web developer passionate about interactive design.
        </p>
      </div>
    </Section>
  );
}
