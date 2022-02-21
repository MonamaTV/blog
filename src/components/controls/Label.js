
const Label = ({styles, text}) => {

    return (
        <label
            className={styles}
            >{ text }
        </label>
    );
};

export default Label;