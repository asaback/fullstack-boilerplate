import style from "../components/layouts/DefaultLayout/index.scss";
import Link from "next/link";

/* This route gets hit by default, e.g. your-site.com */
const DefaultPage = () => {

  const myStyle = {
    fontSize: "100px",
		display: "flex",
		justifyContent: "center",
    alignSelf: "center",
    textDecoration: "none",
    marginTop: "20vh",
    fontFamily: "Open Sans, sans-serif",
    color: "#5B0E0E",
  };

  return ( <div className={style.root}>
<Link href="/home">
    <a style={myStyle}>Enter</a>
  </Link>
  </div>
    
  );
};

export default DefaultPage;
