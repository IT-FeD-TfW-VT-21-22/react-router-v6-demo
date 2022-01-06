import { Link } from "react-router-dom";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="header">
      <div>
        <Logo />
      </div>
      <nav>
        <ul>
          <li>
            <Link className="links" to="/">
              Home
            </Link>
          </li>

          <li>
            <Link className="links" to="/about">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
