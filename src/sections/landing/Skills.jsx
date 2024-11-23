import { useState, useEffect } from "react";
import { TypingText } from "../../components/animationtext/TypingText";

const Skills = () => {
  const [displaySkills, setDisplaySkills] = useState(false);
  const skillData = [
    {
      name: "JavaScript",
      icon: "https://res.cloudinary.com/dvuazircp/image/upload/v1697207416/new_portfolio/javascript_chiohe.webp",
    },
    {
      name: "Tailwind CSS",
      icon: "https://res.cloudinary.com/dvuazircp/image/upload/v1697207414/new_portfolio/tailwind_kdxzon.webp",
    },
    {
      name: "React JS",
      icon: "https://res.cloudinary.com/dvuazircp/image/upload/v1698658576/new_portfolio/reactjs_gka3u9.webp",
    },
    {
      name: "Node JS",
      icon: "https://res.cloudinary.com/dvuazircp/image/upload/v1697207412/new_portfolio/nodejs_sr2iw3.webp",
    },
    {
      name: "sql",
      icon: "https://res.cloudinary.com/dvuazircp/image/upload/v1698216902/new_portfolio/postgresql_wystbi.webp",
    },
    {
      name: "Python",
      icon: "https://res.cloudinary.com/ddkkfumkl/image/upload/v1728603003/py_aortc1.png",
    },
    {
      name: "git",
      icon: "https://res.cloudinary.com/dvuazircp/image/upload/v1697207415/new_portfolio/git_ls7ndf.webp",
    },
    {
      name: "github",
      icon: "https://res.cloudinary.com/dvuazircp/image/upload/v1698216902/new_portfolio/github2_cgha7l.webp",
    },
    {
      name: "Flask",
      icon: "https://res.cloudinary.com/ddkkfumkl/image/upload/v1728603327/flasklogo_gbhrkz.jpg",
    },
  ];

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDisplaySkills(true);
    }, 5000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <section className="mt-6 ms-auto me-auto w-[90%]">
      <div className=" flex flex-col justify-center items-center font-medium">
        <TypingText
          title="Skills"
          textStyles="text-2xl mb-4 font-semibold text-center"
        />

        {displaySkills && (
          <div className=" flex flex-wrap justify-center items-center gap-10 xl:px-10 2xl:px-40">
            {skillData.map((skill) => (
              <div
                className=" w-28 h-28 flex items-center justify-center flex-wrap"
                key={skill.name}
              >
                <img src={skill.icon} alt={skill.name} className="w-full h-full" />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;
