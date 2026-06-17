
import "./Gallery.css";
import { motion } from "framer-motion";

import gallery1 from "../../assets/images/gallery1.png";
import gallery2 from "../../assets/images/gallery2.png";
import gallery3 from "../../assets/images/gallery3.png";
import gallery4 from "../../assets/images/gallery4.png";
import gallery5 from "../../assets/images/gallery5.png";
import gallery6 from "../../assets/images/gallery6.png";

function Gallery() {
const images = [
    gallery1,
    gallery2,
    gallery3,
    gallery4,
    gallery5,
    gallery6,
];

return (
    <section className="gallery" id="gallery">
    <h2>G A L E R Í A</h2>

    <div className="gallery__grid">
        {images.map((img, index) => (
        <motion.div
            key={index}
            className="gallery__card"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
            duration: 0.6,
              delay: index * 0.15,
            }}
            viewport={{ once: true }}
        >
            <img src={img} alt={`Imagen ${index + 1}`} />
        </motion.div>
        ))}
    </div>

    <p className="gallery__text">
        ¡Conectando estudiantes y transformando ayuda en oportunidades!
    </p>
    </section>
);
}

export default Gallery;