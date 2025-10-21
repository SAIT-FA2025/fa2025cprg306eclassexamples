"use client";
import { useState } from "react"

export default function DogFormComp({ newDogFunc, closeFormFunc }) {

    const [dogId, setId] = useState("");
    const [dogName, setName] = useState("");
    const [age, setAge] = useState("");
    const [breed, setBreed] = useState("");
    const [photoUrl, setPhotoUrl] = useState("");

    const handleIdChange = (event) => setId(event.target.value);
    const handleNameChange = (event) => setName(event.target.value);
    const handleAgeChange = (event) => setAge(event.target.value);
    const handleBreedChange = (event) => setBreed(event.target.value);
    const handlePhotoUrlChange = (event) => setPhotoUrl(event.target.value);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(dogId, dogName, age, breed, photoUrl);

        //validation

        let newDogObj = {
            id: dogId,
            name: dogName,
            age: age,
            breed: breed,
            photoUrl: photoUrl,
        }

        newDogFunc(newDogObj);

        setId("");
        setName("");
        setAge("");
        setBreed("");
        setPhotoUrl("");
    }

    return (
        <div onClick={closeFormFunc} className="absolute w-full h-full flex items-center justify-center bg-gray-700/60 z-10">
            <form onClick={ (event) => event.stopPropagation() } onSubmit={handleSubmit} className="bg-white rounded-2xl p-5" >
                <h2 className="text-2xl mb-2">Add a new dog for adoption!</h2>
                <div className="mb-2">
                    <label className="inline-block w-40">ID:</label>
                    <input className="rounded border" type="number" onChange={handleIdChange} value={dogId} />
                </div>
                <div className="mb-2">
                    <label className="inline-block w-40">Name:</label>
                    <input className="rounded border" type="text" onChange={handleNameChange} value={dogName} />
                </div>
                <div className="mb-2">
                    <label className="inline-block w-40">Age:</label>
                    <input className="rounded border" type="number" onChange={handleAgeChange} value={age} />
                </div>
                <div className="mb-2">
                    <label className="inline-block w-40">Breed:</label>
                    <input className="rounded border" type="text" onChange={handleBreedChange} value={breed} />
                </div>
                <div className="mb-2">
                    <label className="inline-block w-40">Photo URL:</label>
                    <input className="rounded border" type="text" onChange={handlePhotoUrlChange} value={photoUrl} />
                </div>
                <div className="flex">
                    <button className="bg-blue-700 hover:bg-blue-500 text-white p-2 rounded cursor-pointer" type="submit">Add dog for adoption!</button>
                    <button className="bg-gray-700 hover:bg-gray-500 text-white p-2 rounded cursor-pointer ml-auto" type="button" onClick={closeFormFunc}>Close Form</button>
                </div>
            </form>
        </div>
    )
}