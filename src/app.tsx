import { EducationSection } from "./components/sections/education";
import { HomeSection } from "./components/sections/home";
import { ProjectsSection } from "./components/sections/projects";

export function App(): React.ReactElement {
  return (
    <div className="relative min-h-screen">
      <main>
        <div className="fixed inset-0 pointer-events-none z-50 shadow-[inset_0_0_200px_rgba(0,0,0,1)]" />
        <HomeSection />
        <EducationSection />
        <ProjectsSection />
      </main>
    </div>
  );
}
