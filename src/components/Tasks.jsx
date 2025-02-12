function Tasks(props){
    return (
        <div>
            <ul className="space-y-3">
                {props.tasks.map((task) => (
                    <li key={task.div} className="bg-slate-400 text-white p-2 rounded-xl">
                        {task.title}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Tasks