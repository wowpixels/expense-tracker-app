import { Form } from "react-router-dom";

// libraries
import { UserPlusIcon } from "@heroicons/react/24/solid";

// assets
import GraphPerson from "../assets/graph-person.jpg";

const Intro = () => {
  return (
    <div className="intro">
      <div>
        <h1>
          Keep <span className="accent">your money</span> on track
        </h1>
        <p>
          Get more insights on your wallet by tracking your expenditures. Get
          started today!
        </p>
        <Form method="post">
          <input
            type="text"
            name="userName"
            required
            placeholder="What is your name?"
            aria-label="Your Name"
            autoComplete="given-name"
          />
          {/* use below hidden field to trigger the form action */}
          <input type="hidden" name="_action" value="newUser" />
          <button type="submit" className="btn btn--dark">
            <span>Create an account</span>
            <UserPlusIcon width={20} />
          </button>
        </Form>
      </div>
      <img src={GraphPerson} alt="Person next to a graph" />
    </div>
  );
};

export default Intro;
