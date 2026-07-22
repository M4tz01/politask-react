import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "../styles/AppPage.css";

function AppPage() {
    return (
        <>
            <Navbar />

            <main className="app-page">

                {/* HERO */}
                <section className="app-hero">

                    <div className="app-hero__content">

                        <span className="app-hero__tag">
                            LA EXPERIENCIA POLI-TASK
                        </span>

                        <h1>
                            Todo el aprendizaje que necesitas en un solo lugar
                        </h1>

                        <p>
                            POLI-TASK conecta a estudiantes que desean aprender,
                            enseñar y crecer juntos dentro de una comunidad
                            académica.
                        </p>

                        <p>
                            Encuentra ayuda, comparte tus conocimientos y gana
                            puntos mientras apoyas a otros estudiantes.
                        </p>

                        <p>
                            Todo esfuerzo tiene su recompensa.
                        </p>

                        

                    </div>

                    <div className="app-hero__visual">

                        <div className="app-phone">

                            <div className="app-phone__header">
                                POLI-TASK
                            </div>

                            <div className="app-phone__content">

                                <div className="app-welcome">
                                    ¡Hola, estudiante! 👋
                                </div>

                                <div className="app-statistics">

                                    <div className="app-stat">
                                        <strong>120</strong>
                                        <span>Puntos</span>
                                    </div>

                                    <div className="app-stat">
                                        <strong>8</strong>
                                        <span>Tutorías</span>
                                    </div>

                                </div>

                                <div className="app-task">
                                    <span>📚</span>

                                    <div>
                                        <strong>
                                            Solicita una tutoría
                                        </strong>

                                        <p>
                                            Encuentra ayuda en tus materias.
                                        </p>
                                    </div>

                                </div>

                                <div className="app-task">
                                    <span>🏆</span>

                                    <div>
                                        <strong>
                                            Canjea tus premios
                                        </strong>

                                        <p>
                                            Ayudanos a ayudar.
                                        </p>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </section>


                {/* CARACTERÍSTICAS */}
                <section className="app-features">

                    <div className="app-section__header">

                        <span className="section-tag">
                            TODO LO QUE PUEDES HACER
                        </span>

                        <h2>
                            Una plataforma pensada para politécnicos 
                        </h2>

                        <p>
                            POLI-TASK una plataforma donde te permite participar activamente en una
                            comunidad donde todos pueden aprender y enseñar.
                        </p>

                    </div>


                    <div className="app-features__grid">

                        <article className="app-feature">

                            <div className="app-feature__icon">
                                🎓
                            </div>

                            <h3>
                                Tutorías entre estudiantes
                            </h3>

                            <p>
                                Encuentra compañeros que puedan ayudarte a
                                comprender mejor una asignatura o tema.
                            </p>

                        </article>


                        <article className="app-feature">

                            <div className="app-feature__icon">
                                🤝
                            </div>

                            <h3>
                                Amar es compartir 
                            </h3>

                            <p>
                                Ayuda a otros estudiantes y contribuye al
                                crecimiento de la comunidad académica.
                            </p>

                        </article>


                        <article className="app-feature">

                            <div className="app-feature__icon">
                                ⭐
                            </div>

                            <h3>
                                Acumula puntos
                            </h3>

                            <p>
                                Recibe puntos por tu participación y colaboración
                                dentro de POLI-TASK.
                            </p>

                        </article>


                        <article className="app-feature">

                            <div className="app-feature__icon">
                                🏆
                            </div>

                            <h3>
                                Obtén recompensas
                            </h3>

                            <p>
                                Utiliza tus puntos para acceder a recompensas
                                disponibles en la plataforma.
                            </p>

                        </article>

                    </div>

                </section>


                {/* FLUJO DE USO */}
                <section className="app-process">

                    <div className="app-section__header">

                        <span className="section-tag">
                            PASO A PASO
                        </span>

                        <h2>
                            Utilizar POLI-TASK es muy sencillo
                        </h2>

                    </div>


                    <div className="app-process__steps">

                        <div className="app-process__step">

                            <span>01</span>

                            <h3>
                                Regístrate
                            </h3>

                            <p>
                                Crea tu cuenta para comenzar a formar parte de
                                la comunidad.
                            </p>

                        </div>


                        <div className="app-process__step">

                            <span>02</span>

                            <h3>
                                Explora
                            </h3>

                            <p>
                                Encuentra tutorías, estudiantes y oportunidades
                                para aprender.
                            </p>

                        </div>


                        <div className="app-process__step">

                            <span>03</span>

                            <h3>
                                Participa
                            </h3>

                            <p>
                                Aprende o comparte tus conocimientos con otros
                                estudiantes.
                            </p>

                        </div>


                        <div className="app-process__step">

                            <span>04</span>

                            <h3>
                                Recompénsate
                            </h3>

                            <p>
                                Acumula puntos y canjéalos por recompensas.
                            </p>

                        </div>

                    </div>

                </section>


                {/* CTA */}
                <section className="app-cta">

                    <h2>
                        ¿Listo para empezar?
                    </h2>

                    <p>
                        Ven y forma parte de una nueva forma de aprender y compartir
                        conocimientos.
                    </p>

                </section>

            </main>

            <Footer />
        </>
    );
}

export default AppPage;