import { useState, useEffect } from "react";

function CreateBreedList() {
    const [dogData, setDogData] = useState({});

    useEffect(function() {
        fetch("https://dog.ceo/api/breeds/list/all")
        .then(res => res.json())
        .then(data => setDogData(data.message))
    }, [])

    return(
        <>
            {Object.keys(dogData).map((breed) => (
                breed
            ))}
        </>
    );
    
}

export default CreateBreedList