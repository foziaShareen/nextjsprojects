import todos from "../../../todos.json";
export async function GET(_, { params }) {
    const { id } = params;
    const todo = todos.find((todo) => todo.id == id);

    return new Response(JSON.stringify(todo), {
        headers: { "Content-Type": "application/json" },
        status:234, // Example status code, can be changed as needed
        statusText: "Custom status text"
    });
}