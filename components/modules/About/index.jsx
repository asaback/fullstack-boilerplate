import style from "./index.scss";

const About = props => {
  return (
    <div className={style.root}>
      <img src={props.image} alt="image of me"></img>
      <div className={style.work}>
        <h2>Education:</h2>
        <br></br>
        <p>{props.text}</p>
        <br></br>
        <h2>Work experience:</h2>
        <br></br>
        <p>{props.text2}</p>
      </div>
    </div>
  );
};

export default About;
