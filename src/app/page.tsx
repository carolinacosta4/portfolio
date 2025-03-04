import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Header />
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {/* <p className="text-8xl font-bold text-center">Carolina Costa</p>
        <p className="text-xl text-center">Coming Soon...</p>
        <div className="flex gap-4">
          <a href="https://www.linkedin.com/in/carolina-costa-16b49a25a">
            <img src="https://skillicons.dev/icons?i=linkedin" />
          </a>
          <a href="mailto:carolinamccosta@gmail.com">
            <img src="https://skillicons.dev/icons?i=gmail&theme=light" />
          </a>
          <a href="https://github.com/carolinacosta4">
            <img src="https://skillicons.dev/icons?i=github" />
          </a>
        </div> */}
        <Projects />
        <Skills />
        <AboutMe />
        <ContactMe />
      </main>
    </div>
  );
}
