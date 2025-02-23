import { ChevronRightIcon, Trash2} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Tasks({tasks, checkTask, deleteTask}){
  const navigate = useNavigate();

  function taskDetails(task){
    const query = new URLSearchParams();
    query.set('title', task.title);
    query.set('description', task.description);
    navigate(`/task?${query.toString()}`);
  }
    return (
        <div>
            <ul className="space-y-3 p-6 bg-slate-200 rounded-xl shadow">
                {tasks.map((task) => (
                    <li key={task.id} className="flex gap-1">
                        <button onClick={() => checkTask(task.id)} className={`bg-slate-400 w-full text-white p-2 rounded-xl text-left ${task.isComplete && 'line-through'}`}>
                          {task.title}
                        </button>
                        <Button onClick={() => taskDetails(task)}>
                          <ChevronRightIcon/>
                        </Button>
                        <button onClick={() => deleteTask(task.id)} className="bg-slate-400 text-white p-2 rounded-xl">
                          <Trash2/>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Tasks