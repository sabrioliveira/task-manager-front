import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { CheckCheck, ArrowLeft } from 'lucide-react';

export default function EditTask() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id !== 'new') {
      // Load task data if editing existing task
      setTitle('Estudar Astronomia');
      setDescription('Observar estrelinhas');
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add save logic here
    navigate('/tasks');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-violet-500 p-4 text-white">
        <div className="max-w-2xl mx-auto flex items-center">
          <div className="flex items-center gap-2">
            <CheckCheck className="h-6 w-6" />
            <h1 className="text-xl font-semibold">Task Manager</h1>
          </div>
        </div>
      </header>

      <main className="p-4 max-w-2xl mx-auto">
        <button
          onClick={() => navigate('/tasks')}
          className="flex items-center gap-2 text-gray-600 hover:text-violet-600 mb-4 transition-colors"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Voltar para tarefas</span>
        </button>

        <div className="bg-white rounded-lg p-6 shadow-md">
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Título"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 border rounded-md"
            />
            
            <div>
              <label className="block text-sm text-gray-600 mb-1">Descrição:</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full p-2 border rounded-md h-32 resize-none"
              />
            </div>
            
            <div className="flex gap-3">
              <button
                type="submit"
                className="flex-1 bg-violet-500 hover:bg-violet-600 text-white font-semibold py-2 px-4 rounded-md transition-colors"
              >
                Editar
              </button>
              
              <button
                type="button"
                onClick={() => navigate('/tasks')}
                className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-md transition-colors"
              >
                Marcar como concluída
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}