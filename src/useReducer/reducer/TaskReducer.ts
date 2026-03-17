import * as z from "zod";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}
interface TaskState {
  todos: Todo[];
  length: number;
  completed: number;
  pending: number;
}
export type TaskAction =
  | { type: "ADD_TODO"; payload: string }
  | { type: "TOGGLE_TODO"; payload: number }
  | { type: "DELETE_TODO"; payload: number };

const todoSchema = z.object({
  id: z.number(),
  text: z.string(),
  completed: z.boolean(),
});

const TaskSchemma = z.object({
  todos: z.array(todoSchema),
  length: z.number(),
  completed: z.number(),
  pending: z.number(),
});
export const getTaskInitialState = (): TaskState => {
  const localStorageState = localStorage.getItem("task-state");
  if (!localStorageState) {
    return {
      todos: [],
      length: 0,
      completed: 0,
      pending: 0,
    };
  } else {
    const result = TaskSchemma.safeParse(JSON.parse(localStorageState));
    if (result.error) {
      console.log(result.error);
      return {
        todos: [],
        length: 0,
        completed: 0,
        pending: 0,
      };
    } else {
      return JSON.parse(localStorageState);
    }
  }
};
export const TaskReducer = (
  state: TaskState,
  action: TaskAction,
): TaskState => {
  switch (action.type) {
    case "ADD_TODO": {
      const newTodo: Todo = {
        id: Date.now(),
        text: action.payload.trim(),
        completed: false,
      };
      return {
        ...state,
        todos: [...state.todos, newTodo],
        length: state.todos.length + 1,
        pending: state.completed + 1,
      };
    }
    case "DELETE_TODO": {
      const currentTodos = state.todos.filter(
        (todo) => todo.id !== action.payload,
      );

      return {
        ...state,
        todos: currentTodos,
        length: currentTodos.length,
        completed: currentTodos.filter((todo) => todo.completed).length,
        pending: currentTodos.filter((todo) => !todo.completed).length,
      };
    }
    case "TOGGLE_TODO": {
      const updatedTodos = state.todos.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo,
      );

      return {
        ...state,
        todos: updatedTodos,
        completed: updatedTodos.filter((todo) => todo.completed).length,
        pending: updatedTodos.filter((todo) => !todo.completed).length,
      };
    }
    default:
      return state;
  }
};
