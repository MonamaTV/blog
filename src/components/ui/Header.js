import styles from './Header.module.css';
import { useLayoutEffect, useState } from 'react';
const Header = () => {


    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const clickMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }


    return (
        <header className={styles.head}>
            <div className={styles.logo}>
                <h2>TadV</h2>
            </div>
            <button 
                className={styles.menu}
                onClick={clickMenu}
            >
                <img src="./menu.png" />
            </button>
            
            <nav className={`${styles.navigation} ${ isMenuOpen ? " " : styles.hides}`}>
                <button 
                    className={styles.closeMenu}
                    onClick={clickMenu}
                ><img src="./close.png" />Close
                </button>
                <ul className={styles.nav}>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Contacts</a></li>
                    <li className={styles.icons}>
                        <a href="#"><img src="./hub.png"/></a>
                        <a href="#"><img src="./tube.png"/></a>
                        <a href="#"><img src="./twitter.png"/></a>
                    </li>
                </ul>
            </nav>
        </header>
    )
};

export default Header;