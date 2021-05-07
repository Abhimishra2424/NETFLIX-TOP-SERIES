import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import Sdata from "./Sdata";
import "./index.css";


ReactDOM.render(
  <>
    <h1 className="heading_style">Netflix Top 3 series</h1>

    {Sdata.map((val) => {
      return (
        <Card
          key={val.id}
          sname={val.sname}
          imgsrc={val.imgsrc}
          title={val.title}
          links={val.links}
        />
      );
    })}
  </>,
  document.getElementById("root")
);
