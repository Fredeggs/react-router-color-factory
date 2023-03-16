import { NavLink } from "react-router-dom";

const Colors = ({ colors }) => {
  console.log(colors);
  return (
    <div>
      <div>
        <h1>Welcome to the Color Factory!</h1>
        <NavLink exact to={"/colors/new"}>
          Add a color
        </NavLink>
      </div>
      <ul>
        {colors.map((c) => (
          <li key={c.hex}>
            <NavLink exact to={`/colors/${c.color}`}>
              {c.color}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Colors;
