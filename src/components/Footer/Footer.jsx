import "./Footer.css";

import facebook from "../../assets/images/facebook.webp";
import instagram from "../../assets/images/ig.webp";
import x from "../../assets/images/x.webp";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer__social">
        <h3>Redes</h3>

        <div className="footer__icons">
          <a 
  href="https://facebook.com" 
  target="_blank" 
  rel="noopener noreferrer"
  aria-label="Facebook"
>
  <img src={facebook} alt="Facebook" />
</a>

<a 
  href="https://www.instagram.com/poli_task/" 
  target="_blank" 
  rel="noopener noreferrer"
  aria-label="Instagram"
>
  <img src={instagram} alt="Instagram" />
</a>

<a 
  href="https://x.com" 
  target="_blank" 
  rel="noopener noreferrer"
  aria-label="X"
>
  <img src={x} alt="X" />
</a>
          
        </div>
      </div>

      <div className="footer__contact">
        <h3>Contáctanos</h3>
        <p>+593 99 461 6687</p>
        <p>politask@gmail.com</p>
      </div>

    </footer>
  );
}

export default Footer;