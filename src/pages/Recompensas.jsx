import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "../styles/Recompensas.css";


import escudo from "../assets/images/escudo.jpg"
import comida2 from "../assets/images/comida2.jpg"
import juegos2 from "../assets/images/juegos2.jpg"
import uniforme2 from "../assets/images/uniforme2.jpeg"




function Recompensas() {
    return (
        <>
            <Navbar />

            <main className="rewards-page">

                {/* ================================
                    HERO
                ================================= */}

                <section className="rewards-hero">

                    <div className="rewards-hero__content">

                        <span className="rewards-hero__tag">
                            RECOMPENSAS POLI-TASK
                        </span>

                        <h1>
                            Aprende, ayuda y recibe recompensas
                        </h1>

                        <p>
                            En POLI-TASK, compartir tus conocimientos también
                            tiene beneficios. Gana puntos por ayudar a otros
                            estudiantes y utilízalos para obtener recompensas.
                        </p>

                    

                    </div>


                    <div className="rewards-hero__visual">

                        <img
                            src={escudo}
                            alt="escudo_recompensa"
                            className="about-hero__image"
                        />

                    </div>

                </section>


                {/* ================================
                    CÓMO GANAR PUNTOS
                ================================= */}

                <section className="points-section">

                    <div className="rewards-section__header">

                        <span className="section-tag">
                            SISTEMA DE PUNTOS
                        </span>

                        <h2>
                            Cada aporte cuenta
                        </h2>

                        <p>
                            Participa en la comunidad y acumula puntos mediante
                            diferentes actividades.
                        </p>

                    </div>


                    <div className="points-grid">

                        <article className="points-card">

                            <div className="points-card__icon">
                                🎓
                            </div>

                            <h3>
                                Dar una tutoría
                            </h3>

                            <strong>
                                +50 puntos
                            </strong>

                            <p>
                                Ayuda a otro estudiante a comprender una materia
                                o tema específico.
                            </p>

                        </article>


                        <article className="points-card">

                            <div className="points-card__icon">
                                🤝
                            </div>

                            <h3>
                                Participar en la comunidad
                            </h3>

                            <strong>
                                +20 puntos
                            </strong>

                            <p>
                                Contribuye activamente al crecimiento de la
                                comunidad POLI-TASK.
                            </p>

                        </article>


                        <article className="points-card">

                            <div className="points-card__icon">
                                ⭐
                            </div>

                            <h3>
                                Recibir buenas valoraciones
                            </h3>

                            <strong>
                                +10 puntos
                            </strong>

                            <p>
                                Ofrece una buena experiencia y recibe valoraciones
                                positivas de otros estudiantes.
                            </p>

                        </article>

                    </div>

                </section>


                {/* ================================
                    RECOMPENSAS DISPONIBLES
                ================================= */}

                <section className="rewards-list">

                    <div className="rewards-section__header">

                        <span className="section-tag">
                            CANJEA TUS PUNTOS
                        </span>

                        <h2>
                            Recompensas para ti
                        </h2>

                        <p>
                            Utiliza los puntos que has acumulado y elige la
                            recompensa que más te guste.
                        </p>

                    </div>


                    <div className="rewards-grid">


                        <article className="reward-card">

                            <div className="rewards-hero__visual">

                        <img
                            src={comida2}
                            alt="recompensa"
                            className="rewards-hero__image"
                        />

                            </div>

                            <div className="reward-card__content">

                                <h3>
                                    Cupón en el poli comedor
                                </h3>

                                <p>
                                    Disfruta de un beneficio en establecimientos
                                    participantes.
                                </p>

                                <span className="reward-points">
                                    100 puntos
                                </span>

                            </div>

                        </article>


                        <article className="reward-card">

                            <div className="rewards-hero__visual">

                        <img
                            src={juegos2}
                            alt="recompensa"
                            className="rewards-hero__image"
                        />

                            </div>

                            <div className="reward-card__content">

                                <h3>
                                    Gana y juega
                                </h3>

                                <p>
                                    Obtén artículos útiles para tus actividades
                                    universitarias.
                                </p>

                                <span className="reward-points">
                                    250 puntos
                                </span>

                            </div>

                        </article>


                        <article className="reward-card">

                            <img
                            src={uniforme2}
                            alt="recompensa"
                            className="rewards-hero__image"
                        />

                            <div className="reward-card__content">

                                <h3>
                                    Uniformes
                                </h3>

                                <p>
                                    Accede a beneficios exclusivos por tu
                                    participación.
                                </p>

                                <span className="reward-points">
                                    500 puntos
                                </span>

                            </div>

                        </article>


                    </div>

                </section>


                

                {/* ================================
                    CTA
                ================================= */}

                <section className="rewards-cta">

                    <h2>
                        Tu conocimiento tiene valor
                    </h2>

                    <p>
                        Empieza a compartir lo que sabes y conviértelo en nuevas
                        oportunidades.
                    </p>

                </section>

            </main>

            <Footer />
        </>
    );
}

export default Recompensas;