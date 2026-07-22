import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "../styles/AboutUs.css";

import estudio from "../assets/images/estudio.jpg";
function AboutUs() {
    return (
        <>
            <Navbar />

            <main className="about-page">

                {/* SECCIÓN PRINCIPAL */}
                <section className="about-hero">

                    <div className="about-hero__content">

                        <span className="about-hero__tag">
                            Quiénes Somos

                        </span>

                        <h1>
                            Aprender, enseñar y crecer juntos
                        </h1>

                        <p>
                            POLI-TASK es una plataforma creada para conectar a
                            estudiantes universitarios que desean compartir sus
                            conocimientos y aprender de otros compañeros.
                        </p>

                        <p>
                            Nuestra propuesta busca crear una comunidad colaborativa
                            donde cada estudiante pueda convertirse tanto en aprendiz
                            como en tutor.
                        </p>

                    </div>

                    <div className="about-hero__visual">

                        <img
                             src={estudio}
                            alt="Estudiantes de POLI-TASK"
                            className="about-hero__image"
                         />

                    </div>

                </section>


                {/* ¿QUÉ ES POLI-TASK? */}
                <section className="about-section about-section--light">

                    <div className="about-section__content">

                        <span className="section-tag">
                            NUESTRA PLATAFORMA
                        </span>

                        <h2>
                            ¿Qué es POLI-TASK?
                        </h2>

                        <p>
                            POLI-TASK es un sistema de tutorías entre estudiantes
                            universitarios. Su objetivo es facilitar el intercambio
                            de conocimientos dentro de la comunidad estudiantil.
                        </p>

                        <p>
                            A través de la plataforma, los estudiantes pueden
                            solicitar ayuda en diferentes asignaturas, encontrar
                            compañeros que dominen determinados temas y participar
                            en sesiones de tutoría.
                        </p>

                        <p>
                            Además, los tutores reciben puntos por compartir sus
                            conocimientos, los cuales pueden ser utilizados para
                            obtener diferentes recompensas.
                        </p>

                    </div>

                </section>


                {/* ¿POR QUÉ NACE POLI-TASK? */}
                <section className="about-problem">

                    <div className="about-problem__header">

                        <span className="section-tag">
                            NUESTRA PROPUESTA
                        </span>

                        <h2>
                            ¿Por qué nace POLI-TASK?
                        </h2>

                        <p>
                            Muchos estudiantes tienen dificultades para encontrar
                            apoyo académico cuando necesitan ayuda con una materia
                            o tema específico.
                        </p>

                    </div>


                    <div className="about-cards">

                        <article className="about-card">

                            <div className="about-card__icon">
                                📚
                            </div>

                            <h3>
                                Dificultades académicas
                            </h3>

                            <p>
                                Algunos estudiantes necesitan apoyo adicional para
                                comprender determinados temas o asignaturas.
                            </p>

                        </article>


                        <article className="about-card">

                            <div className="about-card__icon">
                                🤝
                            </div>

                            <h3>
                                Falta de conexión
                            </h3>

                            <p>
                                Existen estudiantes con conocimientos que podrían
                                ayudar a otros, pero no siempre existe un espacio
                                para conectarlos.
                            </p>

                        </article>


                        <article className="about-card">

                            <div className="about-card__icon">
                                ⭐
                            </div>

                            <h3>
                                Reconocer el esfuerzo
                            </h3>

                            <p>
                                POLI-TASK busca reconocer el tiempo y el conocimiento
                                compartido por los estudiantes.
                            </p>

                        </article>

                    </div>

                </section>



                {/* MISIÓN Y VISIÓN */}
                <section className="about-mission">

                    <div className="mission-card">

                        <span className="section-tag">
                            NUESTRA MISIÓN
                        </span>

                        <h2>
                            Construir una comunidad colaborativa
                        </h2>

                        <p>
                            Nuestra misión es facilitar el intercambio de
                            conocimientos entre estudiantes y crear un espacio
                            donde la colaboración y el aprendizaje sean accesibles
                            para todos.
                        </p>

                    </div>


                    <div className="mission-card">

                        <span className="section-tag">
                            NUESTRA VISIÓN
                        </span>

                        <h2>
                            Aprender juntos para crecer juntos
                        </h2>

                        <p>
                            Buscamos convertirnos en una plataforma que fortalezca
                            la colaboración académica y motive a los estudiantes a
                            compartir sus conocimientos.
                        </p>

                    </div>

                </section>


                {/* LLAMADO A LA ACCIÓN */}
                <section className="about-cta">

                    <h2>
                        Forma parte de la comunidad POLI-TASK
                    </h2>

                    <p>
                        Comparte tus conocimientos, aprende de otros estudiantes
                        y empieza a construir una comunidad académica colaborativa.
                    </p>

                    <h1>
                        😁👨‍🎓📚
                    </h1>

                </section>

            </main>

            <Footer />
        </>
    );
}

export default AboutUs;