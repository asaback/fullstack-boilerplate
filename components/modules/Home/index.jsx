import style from "./index.scss";


const Home = props => {
  return (
    <div className={style.root}>
      <img src={props.image} alt="blue and pink swirl" />
      <h1>Åsa Back</h1>
    </div>
  );
};

export default Home;
