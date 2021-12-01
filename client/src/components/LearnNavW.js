import { NavLink } from "react-router-dom";

const linkStyles = {
  display: "inline-block",
  width: "100px",
  padding: "5px",
  margin: "0 6px 6px",
  background: "black",
  textDecoration: "none",
  color: "white",
};

function LearnNavW() {
  return (
    <nav>
      <NavLink
        to="/bjjW"
        style={linkStyles}
        activeStyle={{ background: "gray" }}
      >
        BJJ
      </NavLink>
      <NavLink
        to="/boxingW"
        style={linkStyles}
        activeStyle={{ background: "gray" }}
      >
        Boxing
      </NavLink>
      <NavLink
        to="/thaiW"
        style={linkStyles}
        activeStyle={{ background: "gray" }}
      >
        Thai
      </NavLink>
      <NavLink
        to="/jkdW"
        style={linkStyles}
        activeStyle={{ background: "gray" }}
      >
        JKD
      </NavLink>
      <NavLink
        to="/capoeiraW"
        style={linkStyles}
        activeStyle={{ background: "gray" }}
      >
        Capoeira
      </NavLink>
    </nav>
  );
}

export default LearnNavW();
