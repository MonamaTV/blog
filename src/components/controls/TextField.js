
const TextField = ({type = "text", value, handleChange, styles, readOnly = false, holder = ""}) => {

    return (
        <input
            type={type}
            value={value}
            onChange={handleChange}
            className={styles}
            readOnly={readOnly}
            placeholder={holder}
        />
    )
};

export default TextField;