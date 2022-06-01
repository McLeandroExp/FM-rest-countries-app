import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";

function App() {  
  return (
    <div className="App font-semibold bg-Very-Light-Gray text-Very-Dark-Blue-B min-h-screen font-nunito-sans dark:bg-Very-Dark-Blue-A dark:text-White">
      <Header />
      <Outlet/>
    </div>
  );
}

export default App;
