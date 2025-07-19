import Link from "next/link";
 import { cookies } from "next/headers";

// there are three ways to dynamically generate pages in Next.js:
//1 one is below
//export const dynamic = "force-dynamic"; // This will force the page to be dynamic and not static
// This means the page will be re-rendered on every request, useful for frequently changing content
// 2nd method to dynamically generate pages is to use the searchParams
//const services = async ({ searchParams }) => {
  //const search = await searchParams;
  //console.log("searchParams: ", search);}
  //write something in url like this: /services?search=web-development
// this will give you the searchParams object with the search key
//console.log("searchParams: ", searchParams);
//3rd method is call cookies
// const Services = async({searchParams}) => {
//   const  mycookies  = await cookies();
// console.log("cookies: ", mycookies); // this will give you the value of the cookie

const Services = () => {
//   const  mycookies  = await cookies();
// console.log("cookies: ", mycookies); // this will give you the value of the cookie
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
            <Link href="/services" className="nav-link active">
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
        <h1>Our Services</h1>
        <ul className="services-list">
          <li>Web Development</li>
          <li>Mobile App Development</li>
          <li>Consulting Services</li>
          <li>Digital Marketing</li>
        </ul>
      </div>
    </>
  );
};

export default Services;