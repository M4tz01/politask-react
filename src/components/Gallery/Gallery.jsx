
import "./Gallery.css";

import gallery1 from "../../assets/images/gallery1.webp";
import gallery2 from "../../assets/images/gallery2.webp";
import gallery3 from "../../assets/images/gallery3.webp";
import gallery4 from "../../assets/images/gallery4.webp";
import gallery5 from "../../assets/images/gallery5.webp";
import gallery6 from "../../assets/images/gallery6.webp";

function Gallery() {
    return (
    <section className="gallery" id="gallery">

        <h2>G A L E R Í A</h2>

        <div className="gallery__grid">

        <div className="gallery__card">
            <img src={gallery1} alt="Imagen 1" />
        </div>

        <div className="gallery__card">
            <img src={gallery2} alt="Imagen 2" />
        </div>

        <div className="gallery__card">
            <img src={gallery3} alt="Imagen 3" />
        </div>

        <div className="gallery__card">
            <img src={gallery4} alt="Imagen 4" />
        </div>

        <div className="gallery__card">
            <img src={gallery5} alt="Imagen 5" />
        </div>

        <div className="gallery__card">
            <img src={gallery6} alt="Imagen 6" />
        </div>

        </div>

    <p className="gallery__text">
        ¡Conectando estudiantes y transformando ayuda en oportunidades!
        </p>

    </section>
);
}

export default Gallery;