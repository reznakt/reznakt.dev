import net from "vanta/dist/vanta.net.min";
import { AuroraText } from "../magicui/aurora-text";
import { PageSection } from "../page-section";

export function HomeSection(): React.ReactElement {
  return (
    <PageSection
      id="home"
      vanta={{
        effect: net,
        effectOptions: { backgroundColor: 0x202020, color: 0x5070fc },
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
        <a
          className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          href="#projects"
        >
          View My Projects
        </a>
      </div>
    </PageSection>
  );
}
