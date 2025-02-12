import { ChevronRightIcon } from "lucide-react";

function Tasks(props){
    return (
        <div>
            <ul className="space-y-3 p-6 bg-slate-200 rounded-xl shadow">
                {props.tasks.map((task) => (
                    <li key={task.id} className="flex gap-1">
                        <button className="bg-slate-400 w-full text-white p-2 rounded-xl text-left">{task.title}</button>
                        <button className="bg-slate-400 text-white p-2 rounded-xl">
                          <ChevronRightIcon/>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Tasks