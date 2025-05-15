import Tasks from './Tasks.jsx';

export default function SelectedProject({
  project,
  onDelete,
  onAddTask,
  onDeleteTask,
  onEditTask,
  tasks,
}) {
  const formattedDate = new Date(project.dueDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <div className="mx-auto mt-16 px-4 w-full max-w-4xl">
      <header className="pb-4 mb-6 border-b-2 border-gray-300">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-600">
            {project.title}
          </h1>
          <button
            className="text-red-600 text-bold "
            onClick={onDelete}
          >
            Delete
          </button>
        </div>
        <p className="mt-2 mb-4 text-gray-400 text-sm sm:text-base">{formattedDate}</p>
        <p className="text-gray-600 whitespace-pre-wrap text-sm sm:text-base">
          {project.description}
        </p>
      </header>

      <Tasks
        tasks={tasks}
        onAdd={onAddTask}
        onDelete={onDeleteTask}
        onEdit={onEditTask}
      />
    </div>
  );
}
