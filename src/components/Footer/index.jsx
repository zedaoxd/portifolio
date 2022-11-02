import './styles.css';
import Wave from '../../img/wave.png';

import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin'
import Git from '@iconscout/react-unicons/icons/uil-github'

const Footer = () => {
    return (
        <div className="footer">
            <img src={Wave} alt="" style={{width: '100%'}} />
            <div className="f-content">
                <span>brunolessamaxx28@gmail.com</span>
                <div className="f-icons">
                    <a href="https://github.com/zedaoxd" target="_blank" rel="noreferrer">
                        <Git color={"white"} size="3rem"/>
                    </a>
                    <a href="https://www.linkedin.com/in/bruno-lessa-ferraz/" target="_blank" rel="noreferrer">
                        <Linkedin color={"white"} size="3rem"/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer;