import "./styles.css";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";

const Experience = () => {
  const transition = { duration: 2, type: "spring" };

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="experience" id="Experience">
      {/* letf side */}
      <div className="awesome">
        <span style={darkMode ? { color: "white" } : { color: "black" }}>
          Tecnologias
        </span>
        <span>Experiência</span>
        <span>
          Experiência e vivência no desenvolvimento de aplicações utilizando
          tecnoligias como...
        </span>
        <div className="blur s-blur1" style={{ background: "#abf1ff94" }}></div>
      </div>

      {/* right side */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
          style={{ left: "14rem" }}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Back-end"}
            detail={"Java, Java EE, Spring Boot, Spring Security, Docker, AWS"}
          />
        </motion.div>

        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
          style={{ top: "12rem", left: "-4rem" }}
        >
          <Card
            emoji={Glasses}
            heading={"Front-end"}
            detail={
              "HTML, CSS, JavaScript, TypeScript, ReactJS, Material-UI, Styled Components"
            }
          />
        </motion.div>

        {/* third card */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
          style={{ top: "19rem", left: "12rem" }}
        >
          <Card
            emoji={Humble}
            heading={"Banco de Dados"}
            detail={"SQL, PL/SQL, Oracle, PostgreSQL, MySql"}
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Experience;
