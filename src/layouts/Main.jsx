import { Outlet, useLoaderData } from "react-router-dom";

// assets
import wave from "../assets/wave.svg";
import Nav from "../components/Nav";

// helper functions
import { fetchData } from "../helpers";

// loader
export function mainLoader() {
  const userName = fetchData("userName");
  return { userName };
}

const Main = () => {
  const { userName } = useLoaderData();
  return (
    <div className="layout">
      <Nav userName={userName} />
      <main>
        <Outlet /> {/* wraps all routes children */}
      </main>
      <img src={wave} alt="footer wave image" />
    </div>
  );
};

export default Main;
