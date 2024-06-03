import About from "./components/About";
import CardWide from "./components/CardWide";
import Header from "./components/Header";
import Projects from "./components/Projects.jsx";
import Background from "./assets/Background.png";
import Skill from "./components/Skill";
import FooterSec from "./components/FooterSec.jsx";
import { useRef, useState } from "react";

function App() {
  const [refer, setrefer] = useState({
    home:useRef(null),
    about:useRef(null),
    skill:useRef(null),
    project:useRef(null),
  })

  const handleScroll = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <>
      <Header clickfunction={handleScroll} refer={refer} setrefer={setrefer}/>

      <main className="profile-page" ref={refer.home}>
        <section className="relative block" style={{ height: "400px" }}>
          <div
            className=" top-0 w-full h-full bg-center bg-cover"
            style={{ backgroundImage: `url(${Background})`, position: "fixed" }}
          >
            <div className="h-24 w-full"></div>
            <CardWide refer={refer.home}/>
          </div>
        </section>
        <section className="relative mt backdrop-blur-">
          <div className="container mx-auto px-4 mt-44 ">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb- shadow-xl rounded-lg -mt-16">
              <div className="px-6 content-center ">
                <About refer={refer.about}/>
              </div>
              <Skill  refer={refer.skill}/>

              <Projects  refer={refer.project}/>
            </div>
          </div>
        </section>
      </main>

      <FooterSec />
    </>
  );
}

export default App;
