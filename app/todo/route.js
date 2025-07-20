import todos from "../../todos.json";
export function GET(){
    return new Response(JSON.stringify(todos), {
        headers: { "Content-Type": "application/json" }
    });
}