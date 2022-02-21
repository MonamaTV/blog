import Form from "./Form";
import styles from './Contacts.module.css';

const Contacts = () => {

    return (
        <div className="contacts-container" id="contacts">
            <div className={styles.mediums}>
                <h2>Get In Touch</h2>
                <p>It is easy to connect with me. Do not hesitate to reach out to me if you have any query or just want to have a conversation</p>
                <br />
                <div className={styles.address}>
                    <address>
                    <p>South Africa,</p>
                    <p>Groblersdal, 0470</p>
                    <p>Mabitsi</p>
                    </address>
                    <br /> 
                    <a href="mailto:">keletsovincent92@gmail.com</a> 
                </div>
                <div className={styles.media}>
                    <a href=""><img src="./git.png" /></a>
                    <a href=""><img src="./tweet.png" /></a>
                    <a href=""><img src="./youtube.png" /></a>
                </div>
            </div>
            <Form />
        </div>
    );
} 

export default Contacts;