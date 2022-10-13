import React, {useState, useEffect} from "react";
import CountryDetail from "../components/CountryDetail";
import CountrySelector from "../components/CountrySelect";
import FavouriteCountries from "../components/FavouriteCountries";

const CountryContainer = () => {

    const [favourites, setFavourites] = useState("");
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);

    useEffect(() => {
        getCountries();
    }, [])

    const getCountries = function(){
        fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(countries => setCountries(countries))
    }

    const onCountrySelected = function (country){
        setSelectedCountry(country);
    }

    const onFavouriteClick = function (chosenCountry) {
        const favourite = [...favourites,chosenCountry.name.common]
        setFavourites(favourite);
    }

    return(
        <>
        <div>
            <CountrySelector countries = {countries} onCountrySelected={onCountrySelected} />
            {selectedCountry ? <CountryDetail selectedCountry={selectedCountry} onFavouriteClick={onFavouriteClick} /> : null}
        </div>

        <div>
                    <FavouriteCountries favourites={favourites} />
        </div>
        </>
    )

}

export default CountryContainer;

