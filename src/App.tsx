import { Outlet } from "react-router-dom";
import { Countries } from "./components/Countries";
import { Header } from "./components/Header";
import { SearchFilter } from "./components/SearchFilter";

function App() {

  return (
    <div className="App bg-Very-Dark-Blue-A text-White min-h-screen font-nunito-sans">
      <Header />
      <Outlet/>
    </div>
  );
}

export default App;
