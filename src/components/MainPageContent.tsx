import { Countries } from "./Countries";
import { ScrollTopBtn } from "./ScrollTopBtn";
import { SearchFilter } from "./SearchFilter";

export const MainPageContent = () => {
  return (
    <div className="[width:90%] ml-auto mr-auto">
      <SearchFilter />
      <Countries />
      <ScrollTopBtn/>
    </div>
  );
};
