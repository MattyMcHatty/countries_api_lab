import React from "react";
import CountryItem from "./CountryItem";

const CountryList = ({countries, onCountryClick}) => {

    const countryItems = countries.map((country, index) => {
        return <CountryItem country = {country} key = {index} onCountryClick={onCountryClick} />
    })
}

return(
    <div>
        <ul>
            {countryItems}
        </ul>
    </div>
)

export default CountryList;
