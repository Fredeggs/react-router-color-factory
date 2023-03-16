import { useState } from "react";
import { Sketch } from "@uiw/react-color";
import { Redirect, useHistory } from "react-router-dom";

const NewColorForm = ({ addColor }) => {
  const INITIAL_FORM_DATA = {
    name: "",
    hex: "",
  };
  const [name, setName] = useState(INITIAL_FORM_DATA.name);
  const [hex, setHex] = useState(INITIAL_FORM_DATA.hex);
  const history = useHistory();

  const handleChange = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    setName(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addColor({ color: name, hex: hex });
    history.push("/colors");
    setName(INITIAL_FORM_DATA.name);
    setHex(INITIAL_FORM_DATA.hsva);
    return <Redirect to="/colors" />;
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">New Color Name:</label>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="New Color Name"
        value={name}
        onChange={handleChange}
      ></input>

      <label htmlFor="Color">Color:</label>
      <Sketch
        style={{ marginLeft: 425 }}
        color={hex}
        onChange={(color) => {
          setHex(color.hex);
        }}
      />

      <button onClick={handleSubmit}>Create Color!</button>
    </form>
  );
};

export default NewColorForm;
