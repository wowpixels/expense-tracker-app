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
          Keep your <span className="accent">Your Money</span> on track
        </h1>
        <p>
          Get more insights of your financial situation by tracking your money
          flow. Let's kick-in today!
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
