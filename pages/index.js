import DefaultLayout from "../components/layouts/DefaultLayout";
import Link from "next/link";

/* This route gets hit by default, e.g. your-site.com */
const DefaultPage = () => {
  return (
    <DefaultLayout>
      <h1>Åsa Back</h1>
      <Link href="/about">
        <a>about</a>
      </Link>
	  <Link href="/work">
        <a>work</a>
      </Link>
	  <Link href="/contact">
        <a>contact</a>
      </Link>
    </DefaultLayout>
  );
};

export default DefaultPage;
