import styles from './Header.module.css'
import Navbar from '../Navbar'

const Header = () => {
    return (
        <header className={styles.header}>
            <h1>News of the World</h1>
            < Navbar />
        </header>
    )
};

export default Header;