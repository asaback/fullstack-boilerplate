import style from "./index.scss";

const About = props => {
  return (
    <div className={style.root}>
      <img src={props.image} alt="image of me"></img>
      <div className={"work"}>
        <h2>Education:</h2>
        <p>{props.text}</p>
        <h2>Work experience:</h2>
        <p>{props.text2}</p>
      </div>
    </div>
  );
};

export default About;
