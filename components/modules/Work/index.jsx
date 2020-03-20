import Link from "next/link";

const Work = (props) => {
  return (
    <div>
      <h1>Work</h1>
      <p>{props.text}</p>
      <Link href="/">
        <a>Back</a>
      </Link>
    </div>
  );
};

export default Work;
