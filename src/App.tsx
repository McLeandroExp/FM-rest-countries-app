import { Countries } from "./components/Countries";
import { Header } from "./components/Header";
import { SearchFilter } from "./components/SearchFilter";

function App() {

  return (
    <div className="App bg-Very-Dark-Blue-A text-White min-h-screen font-nunito-sans">
      <Header />
      <div className="[width:90%] ml-auto mr-auto">
        <SearchFilter />
        <Countries/>
      </div>
    </div>
  );
}

export default App;
