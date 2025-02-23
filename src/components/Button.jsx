function Button(props){
    return(
        <button {...props} className={`bg-slate-400 w-full text-white p-2 rounded-xl text-left`}>
            {props.children}
        </button>
    );
}

export default Button