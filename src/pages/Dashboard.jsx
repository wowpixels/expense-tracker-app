import { useLoaderData } from "react-router-dom";
import Intro from "../components/Intro";

// libraries
import { toast } from "react-toastify";

// helper functions
import { fetchData } from "../helpers";

// loader
export function dashboardLoader() {
  const userName = fetchData("userName");
  return { userName };
}

//action
export async function dashboardAction({ request }) {
  const data = await request.formData();
  const formData = Object.fromEntries(data);
  try {
    localStorage.setItem("userName", JSON.stringify(formData.userName));
    return toast.success(
      `Welcome, ${formData.userName}! Your new account is ready 🚀`
    );
  } catch (error) {
    throw new Error("Oops, there was a problem creating your account...");
  }
}

const Dashboard = () => {
  const { userName } = useLoaderData();
  return <div>{userName ? <h1>Hi {userName}!</h1> : <Intro />}</div>;
};

export default Dashboard;
