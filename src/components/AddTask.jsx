function AddTask({task}){
    return (
        <div className="space-y-3 p-6 bg-slate-200 rounded-xl shadow flex flex-col">
            <input id="task_name" className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md" type="text" placeholder="Task name"></input>
            <input id="task_desc" className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md" type="text" placeholder="Task description"></input>
            <button onClick={() => task} className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium">
                Add Task
            </button>
        </div>
    );
}

export default AddTask