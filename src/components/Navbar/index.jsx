import Toggle from '../Toggle';
import './styles.css'
import { Link } from 'react-scroll';
import {themeContext} from '../../Context';
import { useContext } from "react";

const Navbar = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return ( 
        <div className="n-wrapper" style={darkMode? {color: 'white'} : {color: 'black'}}>
            <div className="n-left">
                <div className="n-name">Bruno</div>
                <Toggle />
            </div>

            <div className="n-right">
                <div className="n-list">
                    <ul>
                        <li>
                            <Link to="Navbar" spy={true} smooth={true}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link spy={true} to="Experience" smooth={true}>
                                Experiência
                            </Link>
                        </li>
                        <li>
                            <Link spy={true} to="Portifolio" smooth={true}>
                                Portifólio
                            </Link>
                        </li>
                    </ul>
                </div>
                <Link spy={true} to="contact" smooth={true}>
                    <button className="button n-button">
                        Fale comigo
                    </button>
                </Link>
            </div>
        </div>
    );
}
 
export default Navbar;