import React, { useEffect } from "react";
import "./Collection.scss"
import SearchFilter from "../../components/SearchFilter/SearchFilter";


const Collection = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="collection">
      <SearchFilter  t={props.t} />
    </div>
  );
};

export default Collection;
