import React from "react";

const FavouriteCountries = ({favourites}) => {

    const favouriteItems = Array.from(favourites).map((favourite, index) =>{
        return <li key={index }>{favourite}</li>
    })

    return(
        
        <>
        <h4>Favourites</h4>
        <ul>
            {favouriteItems}       
        </ul>
        </>
        
    )
    

}

export default FavouriteCountries;