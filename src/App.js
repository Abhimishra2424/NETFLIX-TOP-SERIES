import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";

const App = () => {
  return (
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
    </>
  );
};

export default App;
