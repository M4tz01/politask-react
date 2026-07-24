import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "../styles/Galeria.css";

import aprendizaje from "../assets/images/aprendizaje.webp"
import sesiones from "../assets/images/sesiones.webp"
import comunidad from "../assets/images/comunidad.webp"
import ideas from "../assets/images/ideas.webp"
import logros from "../assets/images/logros.webp"
import crecimiento from "../assets/images/crecimiento.webp"





function Galeria() {
    return (
        <>
            <Navbar />

            <main className="gallery-page">

                {/* ================================
                    HERO
                ================================= */}

                <section className="gallery-hero">

                    <div className="gallery-hero__content">

                        <span className="gallery-hero__tag">
                            GALERÍA POLI-TASK
                        </span>

                        <h1>
                            Conoce nuestra comunidad en acción
                        </h1>

                        <p>
                            Descubre momentos de aprendizaje, colaboración y
                            crecimiento que forman parte de la experiencia
                            POLI-TASK.
                        </p>

                    </div>


                </section>


                {/* ================================
                    GALERÍA
                ================================= */}

                <section className="gallery-section">

                    <div className="gallery-section__header">

                        <span className="section-tag">
                            MOMENTOS POLI-TASK
                        </span>

                        <h2>
                            Aprende, comparte y crece
                        </h2>

                        <p>
                            Cada experiencia representa una oportunidad para
                            aprender algo nuevo y ayudar a los demás.
                        </p>

                    </div>


                    <div className="gallery-grid">

                        <div className="gallery-card ">

                           <div className="rewards-hero__visual">
                           
                                <img
                                src={aprendizaje}
                                alt="galeria"
                                className="rewards-hero__image"
                                />
                           
                            </div>

                            <div className="gallery-card__content">

                                <h3>
                                    Aprendizaje colaborativo
                                </h3>

                                <p>
                                    Estudiantes compartiendo conocimientos y
                                    ayudándose mutuamente.
                                </p>

                            </div>

                        </div>


                        <div className="gallery-card ">

                            <div className="rewards-hero__visual">
                           
                                <img
                                src={sesiones}
                                alt="galeria"
                                className="rewards-hero__image"
                                />
                           
                            </div>

                            <div className="gallery-card__content">

                                <h3>
                                    Sesiones de estudio
                                </h3>

                                <p>
                                    Aprende junto a otros estudiantes.
                                </p>

                            </div>

                        </div>


                        <div className="gallery-card">

                            <div className="rewards-hero__visual">
                           
                                <img
                                src={comunidad}
                                alt="galeria"
                                className="rewards-hero__image"
                                />
                           
                            </div>

                            <div className="gallery-card__content">

                                <h3>
                                    Comunidad
                                </h3>

                                <p>
                                    La colaboración es parte de nuestra esencia.
                                </p>

                            </div>

                        </div>


                        <div className="gallery-card">

                            <div className="rewards-hero__visual">
                           
                                <img
                                src={ideas}
                                alt="galeria"
                                className="rewards-hero__image"
                                />
                           
                            </div>

                            <div className="gallery-card__content">

                                <h3>
                                    Nuevas ideas
                                </h3>

                                <p>
                                    Comparte tus conocimientos y descubre nuevas
                                    perspectivas.
                                </p>

                            </div>

                        </div>


                        <div className="gallery-card">

                            <div className="rewards-hero__visual">
                           
                                <img
                                src={logros}
                                alt="galeria"
                                className="rewards-hero__image"
                                />
                           
                            </div>

                            <div className="gallery-card__content">

                                <h3>
                                    Logros
                                </h3>

                                <p>
                                    Cada meta alcanzada merece ser celebrada.
                                </p>

                            </div>

                        </div>


                        <div className="gallery-card">

                            <div className="rewards-hero__visual">
                           
                                <img
                                src={crecimiento}
                                alt="galeria"
                                className="rewards-hero__image"
                                />
                           
                            </div>

                            <div className="gallery-card__content">

                                <h3>
                                    Crecimiento
                                </h3>

                                <p>
                                    Avanza junto a una comunidad que aprende
                                    contigo.
                                </p>

                            </div>

                        </div>


                    </div>

                </section>


                {/* ================================
    CTA + ESTADÍSTICAS
================================= */}

<section className="gallery-cta">

    <h2>
        Tú también puedes formar parte
    </h2>

    <p>
        Comparte tus conocimientos, ayuda a otros estudiantes y
        construye nuevas experiencias.
    </p>

 


    {/* ESTADÍSTICAS */}

    <div className="gallery-stats">

        <div className="gallery-stat">

            <strong>
                +100
            </strong>

            <span>
                Estudiantes
            </span>

        </div>


        <div className="gallery-stat">

            <strong>
                +50
            </strong>

            <span>
                Tutorías
            </span>

        </div>


        <div className="gallery-stat">

            <strong>
                +500
            </strong>

            <span>
                Puntos entregados
            </span>

        </div>


        <div className="gallery-stat">

            <strong>
                100%
            </strong>

            <span>
                Colaboración
            </span>

        </div>

    </div>

</section>

            </main>

            <Footer />
        </>
    );
}

export default Galeria;