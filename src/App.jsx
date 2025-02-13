import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState } from "react";

function App(){
  const [tasks, setTasks] = useState([{
    id: 1,
    title: 'Estudar base React JS',
    description: 'Estudo para aprender a mexer com react js e seus fundamentos',
    isComplete: false
  },
  {
    id: 2,
    title: 'Estudar base TailwindCSS',
    description: 'Estudo para aprender a mexer com TailwindCSS e seus fundamentos junto com react',
    isComplete: false
  },
  {
    id: 3,
    title: 'Projeto com React JS e TailwindCSS',
    description: 'Projeto próprio para por em prática os estudos de react js com o tailwind.',
    isComplete: false
  }
])

  function checkTask(taskId){
    const newTasks = tasks.map(task => {
      if(task.id === taskId){
        return {...task, isComplete: !task.isComplete };
      }

      return task
    });
    setTasks(newTasks);
  }

  function deleteTask(taskId){
    const newTasks = tasks.filter((task) => task.id !== taskId)
  
  setTasks(newTasks)
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">Tasks Management</h1>
        <AddTask/>
        <Tasks tasks={tasks} checkTask={checkTask} deleteTask={deleteTask}/>
      </div>
    </div>
  );
}

export default App