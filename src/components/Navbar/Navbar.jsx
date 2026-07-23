import "./Navbar.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import logo from "../../assets/images/logo.png";
import user from "../../assets/images/user.png";


function Navbar() {
    const menuVariants = {
        hidden: { opacity: 0, y: -50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut",
                when: "beforeChildren",
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <motion.header
            className="container"
            initial="hidden"
            animate="visible"
            variants={menuVariants}
        >
            <nav className="navbar">
                <motion.div className="navbar__brand" variants={itemVariants}>
                    <img
                        src={logo}
                        alt="logo"
                        className="navbar__img"
                        width="80"
                    />

                    <h1 className="navbar__logo">
                        POLI
                        <span className="navbar__logo--primary">-TASK</span>
                    </h1>
                </motion.div>

                <ul className="navbar__menu">
                    {[
                        ["Inicio", "#inicio"],
                        ["Nosotros", "/nosotros"],
                        ["App", "/app"],
                        ["Recompensas", "/recompensas"],
                        ["Galería", "/galeria"],
                        ["Contacto", "/contacto"],
                    ].map(([text, href], index) => (
                        <motion.li key={index} variants={itemVariants}>

                                

                            {text === "Nosotros" || text === "App" || text === "Contacto"
                            || text === "Galeria" || text === "Recompensas"? (

                                <NavLink className="navbar__link" to={href}>
                                  {text}
                                 </NavLink>

                       ) : (

                <motion.a
                    href={href}
                    whileHover={{
                        y: -4,
                        scale: 1.05,
                        color: "#3f2beb",
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    {text}
                </motion.a>

            )}


            
                        </motion.li>
                    ))}
                </ul>

                <motion.div
                    className="navbar__login"
                    variants={itemVariants}
                >
                    <Link to="/login" className="navbar__login-link">
                        <img src={user} alt="user" width="40" />
                        <motion.span
                            whileHover={{
                                scale: 1.08,
                                color: "#873114",
                            }}
                        >
                            Login
                        </motion.span>
                    </Link>
                </motion.div>
            </nav>
        </motion.header>
    );
}

export default Navbar;