import "./Rewards.css";

import comida from "../../assets/images/comida.webp";
import uniforme from "../../assets/images/uniforme.webp";
import juegos from "../../assets/images/juegos.webp";

function Rewards() {
    return (
        <section className="rewards" id="recompensas">

        <h2>Recompensas</h2>

        <div className="rewards__grid">

        <div className="reward">
            <img src={comida} alt="Comida" />
            <p>PoliComedor</p>
        </div>

        <div className="reward">
            <img src={uniforme} alt="Uniformes" />
            <p>Uniformes</p>
        </div>

        <div className="reward">
            <img src={juegos} alt="Juegos" />
            <p>Juegos</p>
        </div>

        </div>

    </section>
    );
}

export default Rewards;