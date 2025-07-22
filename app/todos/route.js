import { writeFile } from "node:fs/promises";
import todos from "../../todos";

export function GET() {
  return Response.json(todos);
}

export async function POST(request) {
  const todo = await request.json();
  const newTodo = {
    id: crypto.randomUUID(),
    text:todo.text,
    title:todo.title,
    completed: false,
  };

  todos.push(newTodo);
  //by replacer which is second argument, here we pass it as array of id and title, it enable us
  //  to put which field we want to include
  //in case of null all fields will be included
  //await writeFile("todos.json", JSON.stringify(todos, ['id', 'title'], 2));
   
  await writeFile("todos.json", JSON.stringify(todos, null, 2));
  
  return Response.json(newTodo);
}
