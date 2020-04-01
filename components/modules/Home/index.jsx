import style from "./index.scss";


const Home = props => {
  return (
    <div className={style.root}>
      <h1>Åsa Back</h1>
      <img src={props.image} alt="image of me" />
      <h2>{props.text}</h2>
    </div>
  );
};

export default Home;
