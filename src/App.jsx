import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useEffect, useState } from "react";

function App(){
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || []);

  function checkTask(taskId){
    const newTasks = tasks.map(task => {
      if(task.id === taskId){
        return {...task, isComplete: !task.isComplete };
      }

      return task
    });
    setTasks(newTasks);
  }

  function submitTask(title, description){
    const newTask = {
      id: tasks.length + 1,
      title: title,
      description: description,
      isComplete: false
    }

    setTasks([...tasks, newTask]);
  }

  function deleteTask(taskId){
    const newTasks = tasks.filter((task) => task.id !== taskId)
  
  setTasks(newTasks)
  }
  
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">Tasks Management</h1>
        <AddTask submitTask={submitTask}/>
        <Tasks tasks={tasks} checkTask={checkTask} deleteTask={deleteTask}/>
      </div>
    </div>
  );
}

export default App