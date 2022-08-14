//Import Styles
import styles from "styles/components/header.module.css"

//Header Component
export default function Header() {
    //Markup
    return (
        <header className={styles.header}>
            <a href="#about">
                <span className={styles.link + " clickable"}>About</span>
            </a>
            <a href="#services">
                <span className={styles.link + " clickable"}>Services</span>
            </a>
            <a href="#home">
                <span className={styles.link + " clickable"}>Home</span>
            </a>
            <a href="#work">
                <span className={styles.link + " clickable"}>Work</span>
            </a>
            <a href="#contact">
                <span className={styles.link + " clickable"}>Contact</span>
            </a>
        </header>
    )
}
