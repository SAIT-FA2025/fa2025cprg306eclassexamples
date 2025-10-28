
export default function ArtworkComp( {artObj} ){

    const {
        title,
        primaryImageSmall,
        artistDisplayName,
        objectDate,
        department
    } = artObj;

    return(
        <div className="m-10 p-5 bg-blue-400 rounded-2xl">
            <h3 className="text-2xl">{title}</h3>
            { 
            primaryImageSmall != "" && 
            <img src={primaryImageSmall} className="max-h-52 border-2 border-cyan-500" />
            }
            
            <ul>
                <li>Artist: {artistDisplayName}</li>
                <li>Date: {objectDate}</li>
                <li>Department: {department}</li>
            </ul>
        </div>
    );
}
