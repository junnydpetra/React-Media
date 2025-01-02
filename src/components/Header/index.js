import styles from "./Header.module.css";

function Header() {
    return (
        <header className={styles.header}>
            <span>ReactMedia</span>
            <nav>
                <a href="#">Home</a>
                <a href="#">Movies</a>
            </nav>
        </header>
    )
}

export default Header;
