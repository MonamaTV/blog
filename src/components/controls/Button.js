
const Button = ({handleClick, styles, text}) => {

    return (
        <button
            onClick={handleClick}
            className={styles}
        > { text }
        </button>
    );
};

export default Button;