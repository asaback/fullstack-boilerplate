//The nav bar component that is included in the defaul layout (always displayed)

import Link from "next/link";
import style from "./index.scss";

function Nav() {
  return (
    <div className={style.root}>
      <Link href="/home">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/work">
        <a>Work</a>
      </Link>
      <Link href="/contact">
        <a>Contact</a>
      </Link>
    </div>
  );
}

export default Nav;
