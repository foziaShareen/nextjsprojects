import Link from "next/link";

export default async function   Paramsexplanation({searchparams,params}) {
  console.log("searchparams",await searchparams);
  console.log("params",await params);
  //now in localhost 3000, the params is empty object
  //but in localhost 3000/about, the params is {about: "about"}
  //and in localhost 3000/services/seo, the params is {services: "seo"}
  //and in localhost 3000/services/seo?search=123, the params is {services: "seo"} and searchparams is {search: "123"}

  return (
    <>
      <h1>params and searchparams</h1>
      <Link href="/about">About</Link> <Link href="/services">Services</Link>
    </>
  );
}