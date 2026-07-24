import "./Hero.css";
import { useEffect } from "react";
import Typed from "typed.js";
import buho from "../../assets/images/buho.webp";

function Hero() {
    useEffect(() => {
    const typed = new Typed("#typed", {
    strings: [
    '<span class="color1">AYUDAR</span>',
    '<span class="color2">NUNCA FUE TAN</span>',
    '<span class="color3">VALIOSO</span>',
    ],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true,
    contentType: "html",
    showCursor: false,
});

    return () => typed.destroy();
    }, []);

    return (
    <section className="hero" id="inicio">
        <div className="hero__text">
        <h2 id="typed"></h2>
        </div>

        <div className="hero__img">
        <img src={buho} alt="Buho" />
        </div>
    </section>
    );
}

export default Hero;