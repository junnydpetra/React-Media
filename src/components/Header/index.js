import styles from "./Header.module.css";

function Header() {
    return (
        <header className={styles.header}>
            <span>EducationalMedia</span>
            <nav>
                <a href="#">Home</a>
                <a href="#">Courses</a>
            </nav>
        </header>
    )
}

export default Header;
