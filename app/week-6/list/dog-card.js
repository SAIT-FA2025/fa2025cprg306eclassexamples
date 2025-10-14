export default function DogCardComp({dogObj}){

    let {id, name:dogName, age, breed, photoUrl} = dogObj;

    return(
        <div className="bg-blue-300 rounded-2xl p-4 mb-4 text-center sm:text-left">
            <div className="h-30 flex justify-center sm:inline-block sm:align-middle">
                <img className="h-full rounded" src={photoUrl} />
            </div> 
            <div className="block sm:inline-block sm:ml-4 sm:align-middle">
                <h3 className="text-2xl">{dogName}</h3>
                <p>Age: {age}</p>
                <p>Breed: {breed}</p>
                <p>ID: {id}</p>
            </div>
        </div>
    )
}