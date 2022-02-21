import styles from './About.module.css';
import Image from 'next/image';
const About = () => {

    return (
        <div className="container" id="about">
            <div className="heading-title">
                <h1><span>A</span>BOUT</h1>
            </div>
            <div className={styles.homeContent}>
                <div className={styles.img}>
                    {/* <img src="/about.jpg" width="100%" height="100%"/> */}
                </div>
                <div className={styles.aboutContent}>
                    <h2>Small Piece About Me</h2>
                    <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available. It is also used to temporarily replace text in a process called greeking, which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design</p>
                    <div className={styles.links}>
                        <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/vincent-monama-b5705b18b/" className={styles.linkedin}>Check My LinkedIn</a>
                        <a className={styles.contactLink} href="#contacts">Contact</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;