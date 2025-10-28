"use client";
import { useEffect, useState } from "react";
import ArtworkComp from "./artwork";

export default function GalleryComp() {

    const [artworkIds, setArtworkIds] = useState(null);
    const [galleryDisplay, setGalleryDisplay] = useState([]);

    async function getListOfArtIds() {
        try {
            const response = await fetch(
                'https://collectionapi.metmuseum.org/public/collection/v1/objects'
            );
            const data = await response.json();
            // console.dir(data);
            let shuffled = [...data.objectIDs];
            shuffled = shuffled.sort((a, b) => 0.5 - Math.random());
            shuffled = shuffled.slice(0, 10);
            console.dir(shuffled);
            setArtworkIds(shuffled);
        } catch (error) {
            console.log(`Error: ${error.message}`);
        }
    }

    useEffect(() => {
        getListOfArtIds();
    }, []);

    async function getSingleArtwork(artId) {
        try {
            const response = await fetch(
                `https://collectionapi.metmuseum.org/public/collection/v1/objects/${artId}`
            );
            if( !response.ok ) console.log(response.status);
            const data = await response.json();
            return data;
        } catch (error) {
            console.log(`Error: ${error.message}`);
        }
    }


    useEffect(() => {
        (async () => {
            if (artworkIds != null && artworkIds.length > 0) {
                let thisGallery = [];
                for (let i = 0; i < artworkIds.length; i++) {
                    let thisArt = await getSingleArtwork(artworkIds[i])
                    thisGallery.push(thisArt);
                }
                console.dir(thisGallery);
                setGalleryDisplay(thisGallery);
            }
        })();
    }, [artworkIds]);

    return (
        <section>
            {
                galleryDisplay.map( (art) => (
                    <ArtworkComp artObj={art} key={art.objectID} />
                ) )
            }
        </section>
    );
}