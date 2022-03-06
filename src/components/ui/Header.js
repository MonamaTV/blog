import styles from './Header.module.css';
import { useLayoutEffect, useState } from 'react';
import Link from 'next/link';
const Header = () => {


    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const clickMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }


    return (
        <header className={styles.head}>
            <div className={styles.logo}>
                <Link href="/">
                    <a >TadV</a>
                </Link>
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
                ><img src="./closing.png" />
                </button>
                <ul className={styles.nav}>
                    <li><a href="#about">About</a></li>
                    <li><a href="/projects">Projects</a></li>
                    <li><Link href="/blog">
                        <a >Blog</a>
                    </Link></li>
                    <li><a href="#contacts">Contacts</a></li>
                    <li className={styles.icons}>
                        <a rel="noreferrer" target="_blank" href="https://github.com/MonamaTV"><img src="./hub.png"/></a>
                        <a rel="noreferrer" target="_blank" href="https://www.youtube.com/channel/UCTVZlugMB9J90GIOzVJzu6A"><img src="./tube.png"/></a>
                        <a rel="noreferrer" target="_blank" href="https://twitter.com/Monama_Vee"><img src="./twitter.png"/></a>
                    </li>
                </ul>
            </nav>
        </header>
    )
};

export default Header;