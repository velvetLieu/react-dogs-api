import { useState, useEffect } from "react";
import Nav from "../components/Nav";

function BreedImages() {
    const [dogData, setDogData] = useState({});

    useEffect(function() {
        fetch("https://dog.ceo/api/breeds/list/all")
        .then(res => res.json())
        .then(data => setDogData(data.message))
    }, [])

    return(
        <>
            <Nav />
            <div>
                <select>
                    {Object.keys(dogData).map((breed) => (
                        <option>{breed}</option>
                    ))}
                </select>
            </div>
        </>
    );
    
}

export default BreedImages