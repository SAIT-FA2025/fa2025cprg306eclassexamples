"use client";
import { useEffect, useState } from "react";
import ArtworkComp from "./artwork";
export default function SingleArtComp() {

    const [singleArt, setSingleArt] = useState(null);

    async function getSingleArtwork() {
        try {
            const response = await fetch(
                'https://collectionapi.metmuseum.org/public/collection/v1/objects/23458'
            );
            const data = await response.json();
            console.dir(data);
            setSingleArt(data);
        } catch (error) {
            console.log(`Error: ${error.message}`);
        }
    }

    useEffect(() => {
        // IMPORTANT!
        // Make sure fetch API calls are always inside of a useEffect function
        getSingleArtwork();
    }, []);

    return (
        <section>
            {singleArt && <ArtworkComp artObj={singleArt} />}
        </section>
    )
}