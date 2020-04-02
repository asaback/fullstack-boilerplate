// This is the work page

import style from "./index.scss"

const Work = (props) => {

console.log(props);
  return (
    <div className={style.root}>
      <div className={style.images}>
        {/* I should try a map function to render out the images */}
      <img src={props.image} alt="hm"/>
      <img src={props.image2} alt="tb"/>
      <img src={props.image3} alt="wwt"/>
      <img src={props.image4} alt="hi"/>
      </div>
      
      <h2>Projects:</h2>
      <p>{props.text}</p>
    </div>
  );
};

export default Work;
