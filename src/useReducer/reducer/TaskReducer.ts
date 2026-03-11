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
  | { type: "TOGGLE_TODO"; payload: string }
  | { type: "DELETE_TODO"; payload: string };

export const TaskReducer = (
  state: TaskState,
  action: TaskAction,
): TaskState => {
  return state;
};
