import { useState, useEffect } from "react";
import Nav from "../components/Nav";

function BreedImages() {
    const [dogData, setDogData] = useState({});

    useEffect(function() {
        fetch("https://dog.ceo/api/breeds/list/all")
        .then(res => res.json())
        .then(data => setDogData(data.message))
    }, []);


    const handleSelect = (e) => {
        const v = e.target.value;
        console.log("v",v);
        setDogBreed(v);
    };

    const [dogBreed, setDogBreed] = useState("");
    const [breedImages, setBreedImages] = useState([]);
    useEffect(()=>{
        if (!dogBreed) {
            return;
        }
        const u = `https://dog.ceo/api/breed/${dogBreed}/images`;
        fetch(u)
        .then(res => res.json())
        .then(data => setBreedImages(data.message))
    },[dogBreed]);

    return(
        <>
            <Nav />
            <div>
                <select onChange={handleSelect}>
                    {Object.keys(dogData).map((breed) => (
                        <option value={breed}>LOL {breed}</option>
                    ))}
                </select>
                <img src={breedImages.length>0 && breedImages[0]} alt=""/>
            </div>
        </>
    );
    
}

export default BreedImages