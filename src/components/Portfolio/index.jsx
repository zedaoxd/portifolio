import "./styles.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import LandingPage from "../../img/landing-page.png";
import Dsmeta from "../../img/dsmeta.png";
import Dscatalog from "../../img/dscatalog2.png";
import Movieflix from "../../img/movieflix.png";
import NavegacaoSimples from "../../img/navegação-simples.png";
import EEsseFilme from "../../img/eessefilme.png";
import VirtualShop from "../../img/virtual-shop.png";
import "swiper/css";
import "swiper/css/pagination";
import { themeContext } from "../../Context";
import { useContext } from "react";

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="portifolio" id="Portifolio">
      <span style={darkMode ? { color: "white" } : { color: "black" }}>
        Projetos Recentes
      </span>
      <span>Portifólio</span>

      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        modules={[Pagination]}
        pagination={{ clickable: true }}
        className="portifolio-slider"
      >
        <SwiperSlide>
          <a
            href="https://zedaoxd.github.io/vitual-shop/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={VirtualShop} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            href="https://eessefilme.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={EEsseFilme} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            href="https://dscatalog-bruno-lessa.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Dscatalog} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            href="https://movieflix-bruno.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Movieflix} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            href="https://dsmetaapp2022.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Dsmeta} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            href="https://landing-page-bruno.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={LandingPage} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            href="https://layout-and-navigation.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={NavegacaoSimples} alt="" />
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
