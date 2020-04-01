import DefaultLayout from "../components/layouts/DefaultLayout";
import Home from "../components/modules/Home/index";
import Link from "next/link";

/* This route gets hit by default, e.g. your-site.com */
const DefaultPage = () => {
  return (
    <DefaultLayout>
      <Home />

    </DefaultLayout>
  );
};

export default DefaultPage;
