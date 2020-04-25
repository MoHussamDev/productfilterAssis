import React from "react";

const Topsite = ({ backgroundImage, title }) => {
  return (
    <section id="topimage" style={backgroundImage}>
      <div className="m-topsite-contatiner">
        <h1> {title}</h1>
      </div>
    </section>
  );
};

export default Topsite;
