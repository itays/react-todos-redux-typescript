import { ITodoItem } from "../store/Todo/types";

export const getTodos = () =>
  fetch(`http://localhost:8080/todos`).then(res => res.json());

export const createTodo: (name: string) => Promise<ITodoItem> = (name: string) =>
  fetch(`http://localhost:8080/todos`, {
    body: JSON.stringify({ name, isComplete: false }),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'POST',
  }).then(res => res.json());

export const updateTodo = (todo: any) =>
  fetch(`http://localhost:8080/todos/${todo.id}`, {
    body: JSON.stringify(todo),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'PUT',
  }).then(res => res.json());

export const destroyTodo = (id: any) =>
  fetch(`http://localhost:8080/todos/${id}`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'DELETE',
  });
