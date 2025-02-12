function Tasks(props){
    return (
        <div>
            <h2>{props.tasks.map((task) => <p>{task.title}</p>)}</h2>
        </div>
    );
}

export default Tasks