import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <nav className=" ">
      <header className="container py-5 d-flex justify-content-center ">
        <FontAwesomeIcon icon={faUser} className="pe-3 fs-3 text-primary" />
        <h3 className="me-auto fs-3 text-primary fw-bold">ReactFacts</h3>
        <h4 className="text-white ">React Course Project-1</h4>
      </header>
    </nav>
  );
};

export default Header;
