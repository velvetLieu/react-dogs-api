import { useState, useEffect } from "react";
import Nav from "../components/Nav";

function BreedList() {
    const [dogData, setDogData] = useState({});

    useEffect(function() {
        fetch("https://dog.ceo/api/breeds/list/all")
        .then(res => res.json())
        .then(data => setDogData(data.message))
    }, [])

    return(
        <>
            <Nav />
            <ul>
                
                {Object.keys(dogData).map((breed) => (
                    <li>{breed}</li>
                ))}
            </ul>
        </>
    );
    
}

export default BreedList