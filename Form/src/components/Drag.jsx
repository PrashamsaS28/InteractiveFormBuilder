import React from "react";
import { useDrag } from "react-dnd";
import "../App.css";

const Component = "formcomponent";


const Drag = ({ field }) => {
  const props = useDrag(() => ({
    type: Component,
    item: field,
  }));
  const [,drag]=props;
  
  return (
    <div className="formcomp" ref={drag}
     

    >
      {field.name}
    </div>
  );
};

export default Drag;
