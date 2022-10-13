import React, {useState} from "react";

const CountryDetail = ({selectedCountry, onFavouriteClick}) => {

    // const [favourites, setFavourites] = useState(["test"]);

    const [newFavourite, setNewFavourite] = useState("");
    

    const handleFavouriteInput = (event) => {
        setNewFavourite(event.target.value);
    }

    const saveFavourite = (event) => {
        console.log("triggered");
        event.preventDefault();
        const chosenCountry = {...selectedCountry};
        onFavouriteClick(chosenCountry);
        
        // const copyFavourites = [...favourites, selectedCountry];
        // setFavourites(copyFavourites)
        // setNewFavourite("");
    }

    return(
        <div>
            <h3>{selectedCountry.name.common}</h3>
            <p>Population: {selectedCountry.population}</p>

                <button onClick={saveFavourite} value={newFavourite} onChange={handleFavouriteInput}>Add to Favourites</button>
            
            
        </div>
    )
}

export default CountryDetail;
