


import { useState } from 'react';
import NewTask from './NewTask.jsx';

export default function Tasks({ tasks, onAdd, onDelete, onEdit }) {
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editedText, setEditedText] = useState('');

  const startEdit = (task) => {
    setEditingTaskId(task.id);
    setEditedText(task.text);
  };

  const handleSave = () => {
    if (editedText.trim()) {
      onEdit(editingTaskId, editedText.trim());
      setEditingTaskId(null);
      setEditedText('');
    }
  };

  const cancelEdit = () => {
    setEditingTaskId(null);
    setEditedText('');
  };

  return (
    <section className="w-full max-w-2xl mx-auto">
      <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">Tasks</h2>

      <div className="mb-6">
        <NewTask onAdd={onAdd} />
      </div>

      {tasks.length === 0 ? (
        <p className="text-gray-600 text-sm md:text-base">
          This project does not have any tasks yet.
        </p>
      ) : (
        <ul className="mt-6 bg-white rounded-xl shadow-md divide-y divide-gray-200">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 px-4 py-3"
            >
              {editingTaskId === task.id ? (
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 w-full">
                  <input
                    type="text"
                    value={editedText}
                    onChange={(e) => setEditedText(e.target.value)}
                    className="border border-gray-300 rounded px-2 py-1 w-full sm:w-auto"
                  />
                  <div className="flex gap-2">
                    <button
                      onClick={handleSave}
                      className="text-sm text-blue-600 font-medium hover:underline"
                    >
                      Save
                    </button>
                    <button
                      onClick={cancelEdit}
                      className="text-sm text-red-500 font-medium hover:underline"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <span className="text-gray-700 text-base">{task.text}</span>
                  <div className="flex gap-4">
                    <button
                      onClick={() => startEdit(task)}
                      className="text-sm text-blue-600 font-medium hover:underline focus:outline-none"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => onDelete(task.id)}
                      className="text-sm text-red-600 font-medium hover:underline focus:outline-none"
                    >
                      Clear
                    </button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
