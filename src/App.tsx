import { Nav, Intro, Education, Projects, Skills, Contact } from "./components";
//import { Education } from "components/Education";

export function App() {
  return (
    <>
      <div className=" bg-gradient-to-tr h-full min-h-screen from-indigo-500 to-red-300">
        <Nav />
        <Intro />
        <Education />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </>
  );
}
