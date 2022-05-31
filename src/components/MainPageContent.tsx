import { Countries } from "./Countries";
import { SearchFilter } from "./SearchFilter";

export const MainPageContent = () => {
  return (
    <div className="[width:90%] ml-auto mr-auto">
      <SearchFilter />
      <Countries />
    </div>
  );
};
