import { Form, NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";

// libraries
import { TrashIcon } from "@heroicons/react/24/solid";

const Nav = ({ userName }) => {
  return (
    <nav>
      <NavLink to="/" aria-label="Go to home">
        <img src={logo} height={30} alt="Budget App Logo" />
        <span>HomeBudget</span>
      </NavLink>
      {userName && (
        <Form
          method="post"
          action="/logout"
          onSubmit={(event) => {
            if (!confirm("Delete user and all data?")) {
              event.preventDefault();
            }
          }}
        >
          <button type="submit" className="btn btn--warning">
            <span>Delete User</span>
            <TrashIcon width={20} />
          </button>
        </Form>
      )}
    </nav>
  );
};

export default Nav;
