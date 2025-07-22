import { writeFile } from "node:fs/promises";
import todos from "../../../todos.json";

export async function GET(_, { params }) {
  const { id } = params;
  console.log("GET todo with id:", id);
  const todo = todos.find((todo) => String(id) === String(todo.id));

  if (!todo) {
    return Response.json(
      { error: "Todo not found" },
      {
        status: 404,
      }
    );
  }
  return Response.json(todo);
}

export async function PUT(request, { params }) {
  const editTodoData = await request.json();
  const { id } = params;
  const todoIndex = todos.findIndex((todo) => String(id) === String(todo.id));
  const todo = todos[todoIndex];

  if (!todo) {
    return Response.json(
      { error: "Todo not found" },
      {
        status: 404,
      }
    );
  }

  if (editTodoData.id) {
    return Response.json(
      { error: "Changing ID is not allow." },
      {
        status: 403,
      }
    );
  }

  const editedTodo = { ...todo, ...editTodoData };
  todos[todoIndex] = editedTodo;

  await writeFile("d:/projects/todos-nextjs/todos/todos.json", JSON.stringify(todos, null, 2));
  return Response.json(editedTodo);
}