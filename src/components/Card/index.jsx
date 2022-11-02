import './styles.css';
import {themeContext} from '../../Context';
import { useContext } from "react";

const Card = ({emoji, heading, detail}) => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="card" style={darkMode? {color: 'white'} : {color: 'black'}}>
            <img src={emoji} alt="" />
            <span>{heading}</span>
            <span>{detail}</span>
        </div>
    );
};

export default Card;