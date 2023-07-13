import './App.css';
import AboutMe from './title';
import Education from './education';
import Skills from './skills';
import Contact from './contact';
import Projects from './projects';
import Certificates from './certificates';
import resume from "./resume.pdf";


function App() {

  return (
    <div className="App">
      <header>
        <h1>My Resume</h1>
      </header>

      <section className="main-content">
        <AboutMe />

        <Education />

        <Skills />

        <Projects />

        <Certificates />

        <Contact file={resume}/>
      </section>
    </div>
  );
}

export default App;
