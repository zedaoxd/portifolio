import './styles.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import LandingPage from '../../img/landing-page.png';
import Dsmeta from '../../img/dsmeta.png';
import Dscatalog from '../../img/dscatalog2.png';
import Movieflix from '../../img/movieflix.png';
import 'swiper/css';
import 'swiper/css/pagination'
import {themeContext} from '../../Context';
import { useContext } from "react";

const Portfolio = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className="portifolio" id='Portifolio'>
            {/* heding */}
            <span style={darkMode? {color: 'white'} : {color: 'black'}}>Projetos Recentes</span>
            <span>Portifólio</span>

            {/* slider */}
            <Swiper 
            spaceBetween={30} 
            slidesPerView={3} 
            grabCursor={true}
            modules={[Pagination]} 
            pagination={{clickable: true}} 
            className="portifolio-slider"
            >
                <SwiperSlide>
                    <img src={Movieflix} alt="" />
                    <div style={{height:'30px'}}></div>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://dscatalog-bruno-lessa.netlify.app/" target="_blank" rel="noreferrer">
                        <img src={Dscatalog} alt="" />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://dsmetaapp2022.netlify.app/" target="_blank" rel="noreferrer">
                        <img src={Dsmeta} alt="" />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://landing-page-bruno.netlify.app/" target="_blank" rel="noreferrer">
                        <img src={LandingPage} alt="" />
                    </a>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Portfolio;