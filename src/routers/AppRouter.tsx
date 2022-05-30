import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import { CountryElementPage } from "../components/CountryElementPage";
import { getCountries } from "../helpers/getCountries";
export const AppRouter = () => {
  getCountries();
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="search" element={<CountryElementPage />}/>
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
