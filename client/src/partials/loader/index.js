import React, { Fragment,useState } from "react";
import ReactLoading from "react-loading";
import { connect } from "react-redux";
import { LoaderContext } from "../../helpers/loaderContext";

const PreLoader = (props) => {
  const [preLoad, setPreLoad] = useState(false);
  const stat = () => {
    setPreLoad(true);

    setTimeout(() => {
      setPreLoad(false);
    }, 2);
    return true;
  };

  return (
    <Fragment>
      <div className={`loaderBackground ${!preLoad && "unload"}`}>
        <ReactLoading type="balls" color="#7ed6df" />
      </div>
      <LoaderContext.Provider
        value={{
          load: stat,
        }}
      >
        {props.children}
      </LoaderContext.Provider>
    </Fragment>
  );
};
const mapStateToProps = ({ router }) => ({
  router,
});

export default connect(mapStateToProps, null)(PreLoader);
