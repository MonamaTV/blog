const TextArea = ({rows = 5, cols = 10, handleChange}) => {

    return (
        <textarea
            rows={rows}
            cols={cols}
            onChange={handleChange}
        >

        </textarea>
    );
};

export default TextArea;