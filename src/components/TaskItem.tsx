import type { Task } from "../types";

type TaskItemProps = {
  task: Task;
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
};

export function TaskItem({ task, onToggle, onRemove }: TaskItemProps) {
  return (
    <li className="flex items-center gap-3 p-3 border rounded-lg">
      <input
        type="checkbox"
        checked={task.status === "done"}
        onChange={() => onToggle(task.id)}
        className="w-5 h-5"
      />
      <span
        className={
          task.status === "done"
            ? "flex-1 line-through text-gray-400"
            : "flex-1"
        }
      >
        {task.title}
      </span>
      <button
        onClick={() => onRemove(task.id)}
        className="px-2 py-1 text-sm bg-red-100 text-red-700 rounded hover:bg-red-200"
      >
        Remover
      </button>
    </li>
  );
}