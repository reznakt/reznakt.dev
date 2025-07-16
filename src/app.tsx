import { Footer } from "./components/footer";
import { Menu } from "./components/menu";
import { EducationSection } from "./components/sections/education";
import { HomeSection } from "./components/sections/home";
import { ProjectsSection } from "./components/sections/projects";

export function App(): React.ReactElement {
  return (
    <div className="relative">
      <header>
        <Menu />
      </header>
      <main>
        <div className="pointer-events-none fixed inset-0 z-50 shadow-[inset_0_0_200px_rgba(0,0,0,1)]" />
        <HomeSection />
        <EducationSection />
        <ProjectsSection />
      </main>
      <footer className="">
        <Footer />
      </footer>
    </div>
  );
}
