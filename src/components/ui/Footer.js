import styles from './Footer.module.css';

const Footer = () => {

    const year = new Date().getFullYear();
    return (
        <>
            <div className="footer-container">
            <div className={styles.foot}>
                <h2>MonamaTV</h2>
                <p>A young passionate man who intents on using the tools of technology to advance the lifes of those who are around him and the community as large.</p>
            </div>
            <div className={styles.foot}>
                <h3>Quick Links</h3>
                <ul>
                    <li><a href="/blog">Blog</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </div>
            <div className={styles.foot}>
                <h3>Featured</h3>
                <ul>
                    <li><a href="">JavaScript</a></li>
                    <li><a href="">ReactJS</a></li>
                    <li><a href="">FrontEnd</a></li>
                </ul>
            </div>
        </div>
        <footer className={styles.footer}>
            <p>Made with ❤ by MonamaTV. Copyright &copy; { year }</p>
        </footer>
        </>
    );
};

export default Footer;