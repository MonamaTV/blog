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
                    <img src="/homes.svg" width="100%" height="100%"/>
                </div>
                <div className={styles.aboutContent}>
                    <h2>Small Piece About Me</h2>
                    <p>My motivation in software development has led me to become a solution-driven person who always thrives to solve problems with the best possible methodologies. I mostly experience growth in spaces where I get challenged to do tasks that are out of my &apos;comfort-zone&apos;. Also, environments that allow collaborative efforts tend to be my favorites because you learn a lot more from working with people with different experiences and skillsets. </p>  
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