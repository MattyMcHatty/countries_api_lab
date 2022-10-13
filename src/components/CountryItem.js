import React from "react";

const CountryItem = ({country, onCountryClick}) => {

    const handleClick = function(){
        onCountryClick(country);
    }

    return <li onClick={handleClick}>{country.name}</li>

}

export default CountryItem;


