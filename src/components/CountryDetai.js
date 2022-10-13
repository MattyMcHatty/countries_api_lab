import React from "react";

const CountryDetail = ({selectedCountry}) => {

    return(
        <div>
            <h3>{selectedCountry.name.common}</h3>
            <>Population: {selectedCountry.population}</>
        </div>
    )
}

export default CountryDetail;

