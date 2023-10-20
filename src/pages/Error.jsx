import { useRouteError, useNavigate, Link } from "react-router-dom";

// libraries
import { HomeIcon, ArrowUturnLeftIcon } from "@heroicons/react/24/solid";

const Error = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <div className="error">
      <h1>We've got a problem.</h1>
      <p>{error.message || error.statusText}</p>
      <div className="flex-md">
        <button className="btn btn--dark" onClick={() => navigate(-1)}>
          <span>
            <ArrowUturnLeftIcon width={20} /> Go Back
          </span>
        </button>
        <Link className="btn btn--dark" to="/">
          <span>
            Go Home <HomeIcon width={20} />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Error;
