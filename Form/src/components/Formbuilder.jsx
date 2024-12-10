import React, { useState } from "react";

import Drag from "./Drag";
import Drop from "./Drop";
import "../App.css";

const Formbuilder = () => {
  const [fields] = useState([
    {name: "Label", type: "label" },
    {name: "TextField", type: "text" },
    {name: "Checkbox", type: "checkbox" },
    {name: "Radiobutton", type: "radio" },
    {name: "Button", type: "button" },
  ]);

  const [formComponents, setFormFields] = useState([]);

  const addField = (field) => {
    setFormFields((prev) => [
      ...prev,
      {
        ...field,
        isEditing: false,
      },
    ]);
  };

  const fieldupdate = (index, neww) => {
    setFormFields((prev) =>{
      return prev.map((field, i) => {
if (i===index){
    return {...field,...neww};
}else{
    return field;
}
      })
    })
  };

  
  return (
    <div className="form-container">
      <h1 className="title">Form Bulider</h1>

      <div className="preview">
        <div className="formcomponentbox">
          <h1 className="title1">Components</h1>

          {fields.map((field) => (
            <div className="components">
              <Drag field={field} />
            </div>
          ))}
        </div>
        <div className="formdroparea">
          <Drop
            formComponents={formComponents}
            addField={addField}
          ></Drop>
        </div>
      </div>
    </div>
  );
};

export default Formbuilder;
