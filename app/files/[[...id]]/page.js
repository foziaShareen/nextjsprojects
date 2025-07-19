export default async function File({ params }) {
  const { id } = await params;
  return (
    <h1>
      File <i>/{id?.join("/")}</i>
    </h1>
  );
}