import './styles.css';
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import SpringIcon from '../../img/spring-icon.png';
import ReactIcon from '../../img/react-icon.png';
import glassesimoji from '../../img/glassesimoji.png';
import FloatingDiv from '../FloatingDiv';
import Resume from './curriculo.pdf';
import IconUser from '../../img/home-icon-user.png';
import { themeContext } from '../../Context';
import { useContext } from "react";
import { motion } from 'framer-motion';

const Intro = () => {

    const transition = { duration: 2, type: "spring" };

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return ( 
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span style={{ color: darkMode ? "white" : "" }}>Oi! Eu Sou</span>
                    <span>Bruno Lessa</span>
                    <span>Full Stack Developer, Spring boot e ReactJs, construindo sites seguros e bonitos!</span>
                </div>
                <a href={Resume} download> 
                    <button className="button i-button">Download CV</button>
                </a>
                <div className="i-icons">
                    <a href="https://github.com/zedaoxd" target="_blank" rel="noreferrer">
                        <img src={Github} alt="github icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/bruno-lessa-ferraz/" target="_blank" rel="noreferrer">
                        <img src={LinkedIn} alt="linkedin icon" />
                    </a>
                </div>
            </div>
            <div className="i-right">
                <img src={Vector1} alt="blue background 1" />
                <img src={Vector2} alt="orange background 2" />
                <img src={IconUser} alt=""/>

                <motion.img
                    initial={{ left: "-36%" }}
                    whileInView={{ left: "-24%" }}
                    transition={transition}
                    src={glassesimoji} 
                    alt="glasses emoji" 
                />

                <motion.div 
                    initial={{ top: '-4%', left: '74%' }}
                    whileInView={{ left: "68%" }}
                    transition={transition}
                    className="floating-div"
                    style={{top: '-4%', left: '68%'}}>
                        <FloatingDiv image={SpringIcon} text1="Spring" text2="Boot"/>
                </motion.div>

                <motion.div 
                    initial={{ left: "9rem", top: "18rem" }}
                    whileInView={{ left: "0rem" }}
                    transition={transition}
                    className="floating-div"
                    style={{top: '18rem', left: '0'}}>
                        <FloatingDiv image={ReactIcon} text1="React" text2="" />
                </motion.div>
                {/* blur divs */}
                <div className="blur" style={{background: "rgb(238, 210, 255)"}}></div>
                <div className="blur"
                style={{
                    background: "#C1f5ff",
                    top: '17rem',
                    width: '21rem',
                    height: '11rem',
                    left: '-9rem'
                }}></div>
            </div>
        </div>
    );
};
 
export default Intro;