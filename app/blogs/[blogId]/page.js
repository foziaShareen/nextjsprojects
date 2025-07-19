import Link from "next/link";
//when we will npm run build, it will generate static pages for each blog
//this is called static generation
//it will appear as filled circle after build
export function generateStaticParams() {
  return [{ blogId: "1" }, { blogId: "2" }, { blogId: "3" }];}
//export const revalidate = false 
//ISR incremental site regeneration 
export const revalidate = 5  //this will revalidate the page every 5 seconds,but keep in mind
//that this will not work in development mode, it will only work in production mode
//if you want to test it in development mode, you can use the command npm run build
// it will revalidate only when user will visit the page after 5 seconds

const Blog = async ({ params }) => {
  const { blogId } = await params;
  console.log("blogId: ", blogId);
  return (
    <>
      <nav>
        <ul className="navbar">
          <li>
            <Link href="/" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="nav-link">
              About
            </Link>
          </li>
          <li>
            <Link href="/services" className="nav-link">
              Services
            </Link>
          </li>
          <li>
            <Link href="/blogs" className="nav-link active">
              Blogs
            </Link>
          </li>
        </ul>
      </nav>
      <div>
        <h1>Welcome to Our Blog {blogId}</h1>
        <p>This is blog {blogId} page.</p>
      </div>
    </>
  );
};

export default Blog;