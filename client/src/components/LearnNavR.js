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

function LearnNavR() {
  return (
    <nav>
      <NavLink
        to="/bjjR"
        style={linkStyles}
        activeStyle={{ background: "gray" }}
      >
        BJJ
      </NavLink>
      <NavLink
        to="/boxingR"
        style={linkStyles}
        activeStyle={{ background: "gray" }}
      >
        Boxing
      </NavLink>
      <NavLink
        to="/thaiR"
        style={linkStyles}
        activeStyle={{ background: "gray" }}
      >
        Thai
      </NavLink>
      <NavLink
        to="/jkdR"
        style={linkStyles}
        activeStyle={{ background: "gray" }}
      >
        JKD
      </NavLink>
      <NavLink
        to="/capoeiraR"
        style={linkStyles}
        activeStyle={{ background: "gray" }}
      >
        Capoeira
      </NavLink>
    </nav>
  );
}

export default LearnNavR();
