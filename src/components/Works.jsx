import React from "react";
import { Tilt } from 'react-tilt';
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";


const ProjectCard = ({ index, name, description, image, source_code_link }) => {
  return (<motion.div
    variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
    <Tilt
          options={{  
            max: 45,
            scale: 1,
            speed: 450
          }} 
          className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
    
          <div className="relative w-full h-[230px]">
            <img src={image} alt={name}
            className="w-full h-full object-cover rounded-2xl" />
          
          <div className="absolute inset-0 flex 
          justify-end m-3 card-img_hover">
            <div onClick={() => window.open(source_code_link, "_blank")} 
              className="black-gradient w-10 h-10 rounded-full flex 
              justify-center items-center cursor-pointer">
              <img src={github} alt="github" className="w-1/2 h-1/2 object-contain" />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {projects[index].tags.map((tag) => (
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}

          </div>

        </div>
      </Tilt>
    </motion.div>
  );
}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        {/* ✅ Paragraph width expanded here */}
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] leading-[30px] w-full max-w-[1300px]"
        >
          Following projects showcases my skills and expertise through real-world examples of my work.
          where I have applied my skills in web and mobile application development.
          Each project is briefly described with links to the code repositories and what technologies were used.
          Where I've worked with React, React Native, Tailwind CSS, Node.js, android application development.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            project={project}
            {...project}
            index={index}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");
