import React, { useState } from 'react';
import { CheckCheck, Check, Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Tasks() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Estudar Física Quântica', completed: false },
    { id: 2, title: 'Estudar Astronomia', completed: false },
    { id: 3, title: 'Ler livro de História', completed: true }
  ]);

  const navigate = useNavigate();

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const editTask = (id) => {
    navigate(`/tasks/edit/${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-violet-500 p-4 text-white">
        <div className="flex items-center gap-2">
          <CheckCheck className="h-6 w-6" />
          <h1 className="text-xl font-semibold">Task Manager</h1>
        </div>
      </header>

      <main className="p-4 max-w-2xl mx-auto">
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Olá, Sabrina!</h2>
          
          <div className="space-y-3">
            <h3 className="text-gray-600">Suas tarefas pendentes</h3>
            {tasks.filter(task => !task.completed).map(task => (
              <div
                key={task.id}
                className="flex items-center gap-2 bg-white p-3 rounded-lg shadow-sm"
                onClick={() => editTask(task.id)}
              >
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleTask(task.id);
                  }}
                  className="h-6 w-6 rounded-full border-2 border-violet-400 flex items-center justify-center hover:bg-violet-100"
                >
                  {task.completed && <Check className="h-4 w-4 text-violet-400" />}
                </button>
                <span>{task.title}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-gray-600 mb-3">Suas tarefas concluídas</h3>
          {tasks.filter(task => task.completed).map(task => (
            <div
              key={task.id}
              className="flex items-center gap-2 bg-white p-3 rounded-lg shadow-sm mb-2 opacity-70"
              onClick={() => editTask(task.id)}
            >
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleTask(task.id);
                }}
                className="h-6 w-6 rounded-full border-2 border-violet-400 flex items-center justify-center bg-violet-400"
              >
                <Check className="h-4 w-4 text-white" />
              </button>
              <span className="line-through">{task.title}</span>
            </div>
          ))}
        </div>

        <button
          onClick={() => navigate('/tasks/edit/new')}
          className="fixed bottom-6 right-6 bg-violet-500 text-white p-4 rounded-full shadow-lg hover:bg-violet-600 transition-colors"
        >
          <Plus className="h-6 w-6" />
        </button>
      </main>
    </div>
  );
}