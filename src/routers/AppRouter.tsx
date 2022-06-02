import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import { CountryElementPage } from "../components/CountryElementPage";
import { MainPageContent } from "../components/MainPageContent";
import { getCountries } from "../helpers/getCountries";
export const AppRouter = () => {
  getCountries();
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<MainPageContent/>} />
          <Route path="search" element={<CountryElementPage />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
