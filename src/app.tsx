import { Footer } from "./components/footer";
import { Menu } from "./components/menu";
import { EducationSection } from "./components/sections/education";
import { ExperienceSection } from "./components/sections/experience";
import { HomeSection } from "./components/sections/home";
import { ProjectsSection } from "./components/sections/projects";
import { TechnologySection } from "./components/sections/technology";

export function App(): React.ReactElement {
  return (
    <div className="relative">
      <header>
        <Menu />
      </header>
      <main>
        <div className="fixed inset-0 pointer-events-none z-50 shadow-[inset_0_0_200px_rgba(0,0,0,1)]" />
        <HomeSection />
        <EducationSection />
        <ExperienceSection />
        <TechnologySection />
        <ProjectsSection />
      </main>
      <footer className="">
        <Footer />
      </footer>
    </div>
  );
}
