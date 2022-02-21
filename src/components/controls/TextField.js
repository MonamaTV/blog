
const TextField = ({type = "text", value, handleChange, styles, readOnly = false}) => {

    return (
        <input
            type={type}
            value={value}
            onChange={handleChange}
            className={styles}
            readOnly={readOnly}
        />
    )
};

export default TextField;