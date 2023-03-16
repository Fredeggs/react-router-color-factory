import { useState, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Color from "./Color";
import Colors from "./Colors";
import NewColorForm from "./NewColorForm";

const Routes = () => {
  const [colors, setColors] = useState([
    { color: "blue", hex: "#3342FF" },
    { color: "red", hex: "#FF334F" },
    { color: "green", hex: "#36FF33" },
  ]);

  const addNewColor = (newColor) => {
    setColors((c) => [...c, { ...newColor }]);
    console.log(colors);
  };

  useEffect(() => {
    localStorage.setItem("colors", JSON.stringify(colors));
  }, [colors]);

  return (
    <Switch>
      <Route exact path="/colors/new">
        <NewColorForm addColor={addNewColor} />
      </Route>
      <Route exact path="/colors/:color">
        <Color colors={colors} />
      </Route>
      <Route exact path="/colors">
        <Colors colors={colors} />
      </Route>
      <Redirect to="/colors" />
    </Switch>
  );
};

export default Routes;
