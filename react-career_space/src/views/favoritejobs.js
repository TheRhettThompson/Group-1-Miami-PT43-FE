import React, { useContext } from "react";
import { Context } from "../store/appContext";

// substitute favoriteJobs from Favorites Star Wars API project 

const FavoriteJobs = () => {


const {store, actions} = useContext(Context)

//lines 14-15 must rename name to jobs? Original Star Wars API had name as category etc
const favList = store.favoriteJobs.map((fav) => {
    return (
        <li key={fav.name}> 
            {fav.name}
        </li>
    )
})

    return(
        <div>
            <ul>
                {favList}
            </ul>
        </div>
    )
}

export default FavoriteJobs

