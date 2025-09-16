

export default function StudentCompObject( {studentObj} ){

    let {fName} = studentObj;

    return(
        <div className="bg-blue-300 m-4 p-4 rounded-2xl">
            <h3 className="text-2xl text-purple-500">{fName}</h3>
            <ul className="list-disc pl-4 mt-4 text-center">
                <li className="text-md font-bold font-serif">Age: {studentObj.age}</li>
                <li className="text-sm">City: {studentObj.address.city}</li>
                <li className="text-sm">Province: {studentObj.address.province}</li>
            </ul>
        </div>
    );
}