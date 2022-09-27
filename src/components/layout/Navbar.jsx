import { Link } from "react-router-dom";

import Container from "./Container";

function Navbar() {
  return (
    <nav className="p-4">
      <Container>
        <div className="font-cinzel font-extrabold text-xl">
          <p>Breno Lambertini</p>
        </div>
        <ul className="flex">
          <li className="mr-4">
            <Link to="/">Home</Link>
          </li>
          <li className="mr-4">
            <Link to="/about">About</Link>
          </li>
          <li className="mr-4">
            <Link to="/projects">Projects</Link>
          </li>
          <li className="mr-4">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
}

export default Navbar;
