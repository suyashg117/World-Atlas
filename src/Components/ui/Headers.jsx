import { NavLink } from "react-router-dom";

export const Headers = () => {
  return (
    <header>
      <div className="Container">
        <div className="grid navbar">
          <div className="logo">
            <NavLink>
              <h1 className="world"> WORLD ATLAS</h1>
            </NavLink>
           
          </div>
          <nav>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
              <li>
                <NavLink to="/country">Country</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
