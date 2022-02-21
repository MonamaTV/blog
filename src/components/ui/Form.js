import Button from "../controls/Button";
import Label from "../controls/Label";
import TextArea from "../controls/TextArea";
import TextField from "../controls/TextField";
import styles from './Contacts.module.css';
const Form = () => {

    return (
        <form className={styles.contact__form}>
            <h2>Send Message</h2>
            <div className={styles.input__group}>
                <Label text="Fullname" />
                <TextField />
            </div>
            <div className={styles.input__group}>
                <Label text="Email" />
                <TextField type="email" />
            </div>
            <div className={styles.input__group}>
                <Label text="Message" />
                <TextArea />
            </div>
            <div className={styles.input__group}>
                <Button text="Send Message" />
            </div>
        </form>
    );
};

export default Form;