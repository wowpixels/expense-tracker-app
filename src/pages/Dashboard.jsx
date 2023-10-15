//
import { useLoaderData } from "react-router-dom";

// helper functions
import { fetchData } from "../helpers";

// loader
export function dashboardLoader() {
  const userName = fetchData("userName");
  return { userName };
}

const Dashboard = () => {
  const { userName } = useLoaderData();
  return (
    <div>
      <h1>Hi {userName}!</h1>
      {userName && "This is your Personal HomeBudget Dashboard"}
    </div>
  );
};

export default Dashboard;
