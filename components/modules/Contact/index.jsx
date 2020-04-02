// The contact page

import style from "./index.scss"

const Contact = props => {
  return (
    <div className={style.root}>
      <div className={style.color}></div>
      <h1>{props.name}</h1>
      <p>{props.number}</p>
      <p>{props.email}</p>
    </div>
  );
};

export default Contact;
