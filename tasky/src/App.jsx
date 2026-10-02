import './App.css';
import Task from './components/Task';
import { useState } from 'react';

function App() {
  const [ taskState, setTaskState ] = useState({
    tasks: [
      { title:"Dishes", description: "Empty dishwasher", deadline: "Today", priority: "Low" },
      { title: "Laundry", description: "Fold clothes and put away", deadline: "Tomorrow", priority: "Medium" },
      { title: "Tidy up", deadline: "Today", priority: "High" }
    ]
  });

  return (
    <div className="container">
      <h1>Tasky</h1>

      {taskState.tasks.map((task) => (
        <Task
          title={task.title}
          description={task.description}
          deadline={task.deadline}
          priority={task.priority}
          key={task.id}
        />
      ))}

    </div>
  );
}

export default App;