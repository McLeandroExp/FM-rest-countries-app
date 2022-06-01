import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { country } from "../interfaces/countries";
interface Props {
  country: country;
}
export const CountryElement: FC<Props> = ({ country }) => {
  const navigate = useNavigate()
  return (
    <article className="bg-White dark:bg-Dark-Blue rounded-xl cursor-pointer shadow-lg" onClick={()=>{
      navigate(`/search?country=${country.name}`)
    }}>
      <figure>
        <img
          className="[width:100%] h-52 object-cover rounded-xl rounded-b-none"
          src={country.img}
          alt={country.name}
        />
      </figure>
      <div className="p-4">
        <h2>{country.name}</h2>
        <h3 className="mt-3">
          Population :{" "}
          <span className="text-Dark-Gray">{country.population}</span>
        </h3>
        <h3>
          Region: <span className="text-Dark-Gray">{country.region}</span>
        </h3>
        <h3>
          Capital: <span className="text-Dark-Gray">{country.capital}</span>
        </h3>
      </div>
    </article>
  );
};
