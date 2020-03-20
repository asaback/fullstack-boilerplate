import Link from "next/link";

const About = props => {
  return (
    <div>
      <h1>About me</h1>
      <img src={props.image} alt="image of me" />
      <h2>{props.text}</h2>
      <Link href="/">
        <a>Back</a>
      </Link>
    </div>
  );
};

export default About;
