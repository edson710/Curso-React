function Button(props) {
    return (
    <button {...props} 
    className={`bg-slate-400 p-2 rounded-md text-white ${
        props.task?.isCompleted ? "line-through" : ""
    }`}>
        {props.children}
    </button>
    );
}

export default Button;