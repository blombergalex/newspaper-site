import styles from './Navbar.module.css'
import NavItems from '../../data/nav-items.js'

const Navbar = () => {
    return (
        <ul className={styles.navbar}>
            { NavItems.map((item, index) => (
                <li key={index}>
                    <a href={`/${item}`}>{item}</a>
                </li>
            ))}
        </ul>
    )
}

export default Navbar;