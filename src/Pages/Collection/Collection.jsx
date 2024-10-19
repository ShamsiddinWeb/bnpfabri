import React, { useEffect } from "react";
import News from "../../components/News/News";
import "./Collection.scss"

const Collection = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="collection">
      <News t={props.t} />
    </div>
  );
};

export default Collection;
