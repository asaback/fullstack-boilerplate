

const About = props => {
  return (
    <div>
      <h1>About me</h1>
      <img src={props.image} alt="image of me" />
      <h2>{props.text}</h2>

    </div>
  );
};

export default About;
