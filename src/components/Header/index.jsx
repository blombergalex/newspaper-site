import styles from './Header.module.css'
import Navbar from '../Navbar'

const Header = () => {
    return (
        <header className={styles.header}>
            <p>This is the header</p>
            < Navbar />
        </header>
    )
};

export default Header;