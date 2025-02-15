import { useState } from "react";

function AddTask({submitTask}){
    
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');

    return (
        <div className="space-y-3 p-6 bg-slate-200 rounded-xl shadow flex flex-col">
            <input className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md" type="text" placeholder="Task name" value={title} onChange={(event) => setTitle(event.target.value)}></input>
            <input className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md" type="text" placeholder="Task description" value={desc} onChange={(event) => setDesc(event.target.value)}></input>
            <button className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium" onClick={() => {
                if(!(title.trim() === '')  ){
                    submitTask(title, desc)
                    setTitle('');
                    setDesc('');
                }
            }}> Add Task
            </button>
        </div>
    );
}

export default AddTask