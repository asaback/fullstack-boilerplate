/* dependencies */
import fetch from "isomorphic-unfetch";

/* layout */
import DefaultLayout from "../components/layouts/DefaultLayout";

/* components */
import Home from "../components/modules/Home/index";
import About from "../components/modules/About/index";
import Work from "../components/modules/Work/index";
import Contact from "../components/modules/Contact/index";

/* Helper function to fetch data - do we need this as an extra function? Debatable. 😊 */
function fetchUrl(url) {
  return fetch(url).then(r => r.json());
}

/* This route gets hit when our user appends a slug to
the url and therefore the page request, e.g. your-site.com/about */
const SlugPage = ({ data }) => {
  const { content } = data;
  console.log(data);
  console.log(`🌈 I am getting this content from Storybok: ${content}`);
  const about = content.components.find(item => item.component === "about");
  const work = content.components.find(item => item.component === "work");
  const contact = content.components.find(item => item.component === "contact");
  const home = content.components.find(item => item.component === "home");

  /* Now you need to map your own components, I just left the headline module as reference */
  return (
    <DefaultLayout>
      {about ? <About image={about.image} text={about.text} text2={about.text2} /> : null}
      {work ? <Work text={work.text} image={work.image} image2={work.image2} image3={work.image3} image4={work.image4}/> : null}
      {contact ? <Contact name={contact.name} number={contact.number} email={contact.email}/> : null}
	  {home ? <Home image={home.image}text={home.text} /> : null}
    </DefaultLayout>
  );
};

/* Before rendering, we are calling our internal API endpoint (server).
This call is hitting the code we wrote in 'pages/api/page/[slug].js' */
SlugPage.getInitialProps = async ({ query }) => {
  /* {query} is an object we receive within this method from Next,
	so that we can retrieve the slug (e.g. '/welcome') coming with the route */
  const { page } = query;
  /* Calling our internal api endpoint so that we can fetch Storyblok content
	server-side (we are on client-side here) */
  const data = await fetchUrl(`http://localhost:3000/api/page/${page}`);
  /* Returning the data back into SlugPage as props */
  return { data }; /* This is the same as { data: data } */
};

export default SlugPage;
