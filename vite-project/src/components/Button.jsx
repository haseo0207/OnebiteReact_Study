const Button = ({ children, text, color = "green" }) => {
    const onClickButton = (e) =>{
        console.log(e);
        console.log(children + " - " + text);
    }
    return (
        <button style={{ color: color }}
        onClick={onClickButton}
        // onMouseEnter={onClickButton}
        >
            {text} - {children}
        </button>
    )
};

export default Button