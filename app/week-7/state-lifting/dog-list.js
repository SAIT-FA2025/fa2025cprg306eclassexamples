"use client";

import { useState } from "react";
import DogCardComp from "./dog-card";


export default function DogListComp( {dogArray, removeDogFunc} ){

    let [filter, setFilter] = useState("all");
    let [sortBy, setSortBy] = useState("none");

    const handleDogFilterChange = (event) => setFilter(event.target.value);
    const handleDogSortChange = (event) => setSortBy(event.target.value);

    if( filter != "all" ){
        if(filter == "young") dogArray = dogArray.filter( (dog) => dog.age <= 3 );
        if(filter == "old") dogArray = dogArray.filter( (dog) => dog.age > 3 );
    }

    if( sortBy != "none" ){
        dogArray.sort( (dogA,dogB) => {
            if( isNaN( parseInt( dogA[sortBy] ) ) ){
                //alphabetical
                let nameA = dogA.name.toUpperCase();
                let nameB = dogB.name.toUpperCase();
                if(nameA < nameB) return -1;
                if(nameA > nameB) return 1;
                return 0;
            } else {
                // numeric
                return dogA.age - dogB.age;
            }
        } )
    }

    return(
        <section className="p-6">
            <h1 className="text-3xl text-center">List of Dogs for Adoption</h1>
            <div className="bg-blue-100 my-4 p-4 flex rounded-2xl">
                <div className="flex-1">
                    <label>Filter by:</label>
                    <select className="ml-4 bg-white p-2 rounded" onChange={handleDogFilterChange}>
                        <option value="all">All Dogs</option>
                        <option value="young">Young</option>
                        <option value="old">Old</option>
                    </select>
                </div>
                <div className="flex-1">
                    <label>Sort by:</label>
                    <select className="ml-4 bg-white p-2 rounded" onChange={handleDogSortChange}>
                        <option value="none">None</option>
                        <option value="name">Name</option>
                        <option value="age">Age</option>
                    </select>
                </div>
            </div>
            <div>
                {dogArray.map( (dog) => (
                    <DogCardComp key={dog.id} dogObj={dog} removeDogFunc={removeDogFunc} />
                ) )}
            </div>
        </section>
    )
}