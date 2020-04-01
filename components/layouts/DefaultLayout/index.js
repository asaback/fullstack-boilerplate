import style from "./index.scss";
import resets from "./styleReset.scss";

import Head from "../../common/Head";
import Nav from "../../modules/Nav/index";

const DefaultLayout = props => {
  const title = "Åsa Back";

  return (
    <div className={(resets, style.root)}>
      <div className={style.pageWrapper}>
        <Head title={title} />
        <div className="nav">
          <Nav />
        </div>

        {props.children}
      </div>
    </div>
  );
};

export default DefaultLayout;
