import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "../styles/Contacto.css";

function Contacto() {
    return (
        <>
            <Navbar />

            <main className="contact-page">

                {/* ================================
                    HERO
                ================================= */}

                <section className="contact-hero">

                    <div className="contact-hero__content">

                        <span className="contact-hero__tag">
                            CONTACTO POLI-TASK
                        </span>

                        <h1>
                            Estamos aquí para ayudarte
                        </h1>

                        <p>
                            ¿Tienes alguna pregunta, sugerencia o necesitas
                            ayuda? Escríbenos y estaremos encantados de
                            escucharte.
                        </p>

                    </div>

                </section>


                {/* ================================
                    INFORMACIÓN Y FORMULARIO
                ================================= */}

                <section className="contact-section">

                    <div className="contact-info">

                        <span className="section-tag">
                            HABLEMOS
                        </span>

                        <h2>
                            Ponte en contacto con nosotros
                        </h2>

                        <p>
                            Tu opinión es importante para seguir mejorando
                            POLI-TASK y construir una mejor experiencia para
                            toda la comunidad estudiantil.
                        </p>


                        <div className="contact-info__item">

                            <span className="contact-info__icon">
                                📧
                            </span>

                            <div>
                                <h3>
                                    Correo electrónico
                                </h3>

                                <p>
                                    politask@gmail.com
                                </p>
                            </div>

                        </div>


                        <div className="contact-info__item">

                            <span className="contact-info__icon">
                                📍
                            </span>

                            <div>
                                <h3>
                                    Ubicación
                                </h3>

                                <p>
                                    Escuela Politécnica Nacional
                                </p>
                            </div>

                        </div>


                        <div className="contact-info__item">

                            <span className="contact-info__icon">
                                📱
                            </span>

                            <div>
                                <h3>
                                    Teléfono
                                </h3>

                                <p>
                                    +593 99 461 6687

                                </p>
                            </div>

                        </div>


                        {/* MAPA DE GOOGLE MAPS */}

                    <div className="contact-map">

                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d249.36196085369687!
                            2d-78.488205365911!3d-0.21057847650003622!2m3!1f0!2f0!3f0!3m2!1i
                            1024!2i768!4f13.1!3m3!1m2!1s0x91d59b28aecab1e7%3A0xe473cef4fcbcfd9b!2sESFOT%20-%20Aula%2016!5e0!3m2!1ses-419!2sec!4v1784683903194!5m2!1ses-419!2sec"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="strict-origin-when-cross-origin"
                            title="Ubicación de POLI-TASK"
                        ></iframe>

                    </div>


                    </div>

                </section>


                {/* ================================
                    PREGUNTAS
                ================================= */}

                <section className="contact-help">

                    <div className="contact-help__header">

                        <span className="section-tag">
                            PREGUNTAS
                        </span>

                        <h2>
                            ¿Cómo podemos ayudarte?
                        </h2>

                        <p>
                            Estamos comprometidos con ofrecerte la mejor
                            experiencia posible dentro de POLI-TASK.
                        </p>

                    </div>


                    <div className="contact-help__cards">

                        <article className="contact-help__card">

                            <div className="contact-help__icon">
                                ❓
                            </div>

                            <h3>
                                ¿Tienes una duda?
                            </h3>

                            <p>
                                Escríbenos y te ayudaremos a resolver cualquier
                                inquietud sobre la plataforma.
                            </p>

                        </article>


                        <article className="contact-help__card">

                            <div className="contact-help__icon">
                                💡
                            </div>

                            <h3>
                                ¿Tienes una sugerencia?
                            </h3>

                            <p>
                                Tus ideas nos ayudan a mejorar constantemente
                                POLI-TASK.
                            </p>

                        </article>


                        <article className="contact-help__card">

                            <div className="contact-help__icon">
                                🛠️
                            </div>

                            <h3>
                                ¿Encontraste un problema?
                            </h3>

                            <p>
                                Infórmanos para poder solucionarlo y mejorar tu
                                experiencia.
                            </p>

                        </article>

                    </div>

                </section>


                {/* ================================
                    CTA
                ================================= */}

                <section className="contact-cta">

                    <h2>
                        Tu opinión nos ayuda a crecer
                    </h2>

                    <p>
                        Juntos podemos construir una comunidad universitaria
                        más colaborativa.
                    </p>

                </section>

            </main>

            <Footer />
        </>
    );
}

export default Contacto;