import DefaultLayout from "../components/layouts/DefaultLayout";
import Link from "next/link";

/* This route gets hit by default, e.g. your-site.com */
const DefaultPage = () => {
  return (
    <DefaultLayout>
      <h1>Åsa Back</h1>

    </DefaultLayout>
  );
};

export default DefaultPage;
