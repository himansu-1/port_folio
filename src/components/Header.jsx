import { useState } from "react";

const Header = (props) => {
  const {clickfunction, refer, setrefer} = props;
  const [brandName, setBrandName] = useState("Himansu Sekhar Sahu");
  const [menuLinks, setMenuLinks] = useState([
    {
      title: "Home",
      function: refer.home,
      id: 1,
    },
    {
      title: "About",
      function: refer.about,
      id: 2,
    },
    {
      title: "Skill",
      function: refer.skill,
      id: 2,
    },
    {
      title: "Projects",
      function: refer.project,
      id: 3,
    },
  ]);
  return (
    <>
      <header className="w-full flex justify-center h-0">
        <div className="fixed container shadow-lg z-50 w-screen px-5 py-3 flex items-center m-3 mr-6  rounded-xl content-center justify-center  bg-opacity-55 backdrop-blur-sm bg-white">
          {/* <div className="w-1/3">
            <h1 className="text-2xl font-bold ">{brandName}</h1>
          </div>
          <div className="flex w-2/3 justify-center min-w"> */}
          <div className="flex justify-center min-w ">
            {menuLinks.map((item, index) => {
              return (
                <a
                key={index}
                  className="mx-3 font-serif font-semibold text-lg hover:text-red-600 hover:scale-110 transition-all cursor-pointer"
                  onClick={()=>{clickfunction(item.function);console.log(item.function)}}
                >
                  {item.title}
                </a>
              );
            })}
          </div>
        </div>
        <hr className="border mx-7 mb-5" />
      </header>
      {/* <div className="h-20 w-full"></div> */}
    </>
  );
};

export default Header;
