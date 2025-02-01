import React from "react";
import style from "./header.module.css";

const Header = () => {
    return (
        <header className={style.header}>
            <div className={style.logoContainer}>
                <img src="/logo.png" alt="Logo" className={style.image} />
            </div>
            <h1 className={style.fadeIn}>Demchenko Cosmetologist</h1>
            <p className={style.fadeInText}>
                Розкрий свою природну красу й мінімалізм зі мною...
            </p>
        </header>
    );
};

export default Header;
