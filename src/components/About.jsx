import React, { useEffect, useState } from "react";
import Profile_2 from "../assets/Profile_2.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import CardWide from "./CardWide";
import { VscDebugBreakpointFunction } from "react-icons/vsc";
import Heading from "./Heading";

function About({ refer }) {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Function to update the width state
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    // Add event listener
    window.addEventListener("resize", handleResize);
    // console.log(width);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [window.innerWidth]);
  return (
    <>
      <div className="h-2" ref={refer}></div>
      <Heading heading={"About Me"} />
      <div className="flex justify-center">
        <div className="flex flex-col justify-center md:flex-row p-0 m-2 my-5 transition duration-500 hover:scale-105 hover:shadow-inner hover:bg-gray-100 rounded-lg w-full md:w-fit content-center">
          <div className="flex-none self-center md:self-auto">
            <img
              src={Profile_2}
              className="bg-orange-200 h-52 m-5 rounded-full w-full md:w-auto"
              alt=""
            />
          </div>
          <div className="flex justify-center content-center w-full z-20">
            <Carousel
              autoPlay={true}
              infiniteLoop
              showThumbs={false}
              showStatus={false}
              showIndicators={false} // Hide the indicator dots
              showArrows={false} // Hide the navigation buttons
              interval={3000} // Change interval as needed
              transitionTime={200} // Adjust transition time
              // width={650}
              // width="100%"
              width={width / 2}
            >
              <div className="h-full content-center p-3">
                <p className="text-lg font-mono">
                  I'm a Full Stack Web Developer skilled in the{" "}
                  <strong>MERN stack</strong> (MongoDB, Express.js, React, and
                  Node.js). With a background in computer science and experience
                  in Java, Python, C, and C++, I build efficient and scalable
                  web applications.
                </p>
              </div>
              <div className="h-full content-center p-3">
                <p className="text-lg font-mono">
                  I hold a degree in <strong>MCA</strong> (Master of Computer
                  Application) from <strong>Berhampur University</strong>, and
                  have worked on various projects that showcase my abilities in
                  both front-end and back-end development. I'm passionate about
                  staying updated with the latest web technologies and
                  continuously improving my skills.
                </p>
              </div>
              <div className="h-full content-center p-3">
                <p className="text-lg font-mono">
                  I'm always excited to take on new challenges and collaborate
                  with others to create impactful web applications. Feel free to
                  contact me at [Your Email] or connect with me on [Your
                  LinkedIn/Other Social Media].
                </p>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
