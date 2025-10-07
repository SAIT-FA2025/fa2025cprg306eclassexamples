"use client";

import { useState } from "react";

export default function ControlledFormComp() {

    const [dogName, setDogName] = useState("");
    const [dogBirthdate, setDogBirthdate] = useState("");
    const [dogBreed, setDogBreed] = useState("");
    const [dogBio, setDogBio] = useState("");

    const handleDogNameChange = (event) => {
        console.dir(event.target.value);
        setDogName(event.target.value);
    }
    const handleDogBirthdateChange = (event) => setDogBirthdate(event.target.value);
    const handleDogBreedChange = (event) => setDogBreed(event.target.value);
    const handleDogBioChange = (event) => setDogBio(event.target.value);

    const resetForm = () => {
        setDogName("");
        setDogBirthdate("");
        setDogBreed("");
        setDogBio("");
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        let dogObj = {
            name: dogName,
            bDay: dogBirthdate,
            breed: dogBreed,
            bio: dogBio
        }

        alert(`New Dog: ${dogObj.name} was born on ${dogObj.bDay} and is a ${dogObj.breed}`);
    }

    let inputStyles = "bg-white border-1 border-blue-600 rounded px-2 py-1 focus:bg-amber-200";

    return (
        <form className="bg-blue-300 rounded-2xl p-4" onSubmit={handleSubmit} action="https://www.sait.ca">
            <h2 className="text-center text-2xl mb-4">Add New Dog</h2>
            <div className="mb-4">
                <label className="inline-block w-40">Dog Name:</label>
                <input name="dog_name" value={dogName} type="text" className="bg-white border-1 border-blue-600 rounded px-2 py-1 focus:bg-amber-200" onChange={handleDogNameChange} />
            </div>
            <div className="mb-4">
                <label className="inline-block w-40">Dog Birthdate:</label>
                <input type="date" value={dogBirthdate} className={inputStyles} onChange={handleDogBirthdateChange} />
            </div>
            <div className="mb-4">
                <label className="inline-block w-40">Dog Breed:</label>
                <select value={dogBreed} className={inputStyles} onChange={handleDogBreedChange}>
                    <option value="">--- Please select a dog breed ---</option>
                    <option value="goldenretriever">Golden Retriever</option>
                    <option value="boxer">Boxer</option>
                    <option value="greatdane">Great Dane</option>
                    <option value="poodle">Poodle</option>
                </select>
            </div>
            <div className="mb-4">
                <label className="inline-block w-40 align-top">Dog Bio:</label>
                <textarea className={inputStyles} value={dogBio} onChange={handleDogBioChange}></textarea>
            </div>
            <div className="text-center">
                <button
                    type="submit"
                    className="bg-green-700 text-white rounded cursor-pointer
                     hover:bg-green-600 active:bg-amber-600 transition-colors px-3 py-2">Submit Dog</button>
                <button type="button" className="bg-blue-700 text-white rounded cursor-pointer
                     hover:bg-blue-600 active:bg-amber-600 transition-colors px-3 py-2 ml-2" onClick={resetForm}>Reset Form</button>
            </div>
            <div className="italic">
                <h3>Debug info:</h3>
                <p>{dogName}</p>
                <p>{dogBirthdate}</p>
                <p>{dogBreed}</p>
                <p>{dogBio}</p>
            </div>
        </form>
    );
}