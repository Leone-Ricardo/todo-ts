import { useState } from "react";
import { TaskItem } from "./components/TaskItem";
import type { Task } from "./types";

export default function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [input, setInput] = useState<string>("");

  const addTask = (title: string): void => {
    if (!title.trim()) return;
    const newTask: Task = {
      id: Date.now(),
      title: title.trim(),
      status: "todo",
    };
    setTasks((prev) => [...prev, newTask]);
    setInput("");
  };

  const toggleTask = (id: number): void => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === id
          ? { ...t, status: t.status === "todo" ? "done" : "todo" }
          : t
      )
    );
  };

  const removeTask = (id: number): void => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <main className="min-h-screen bg-slate-100 flex justify-center p-6">
      <div className="w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-slate-800">
          Minhas Tarefas
        </h1>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            addTask(input);
          }}
          className="flex gap-2 mb-4"
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Nova tarefa..."
            className="flex-1 border rounded-lg px-3 py-2 bg-white"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Adicionar
          </button>
        </form>

        <p className="text-sm text-slate-500 mb-2">
          {tasks.filter((t) => t.status === "done").length} de {tasks.length}{" "}
          concluídas
        </p>

        <ul className="space-y-2">
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onToggle={toggleTask}
              onRemove={removeTask}
            />
          ))}
        </ul>
      </div>
    </main>
  );
}