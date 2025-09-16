

export default function StudentComp(props){

    let {sName, sAge, sCity, sProvince} = props;

    return(
        <div className="bg-blue-300 m-4 p-4 rounded-2xl">
            <h3 className="text-2xl text-purple-500">{sName}</h3>
            <ul className="list-disc pl-4 mt-4 text-center">
                <li className="text-md font-bold font-serif">Age: {sAge}</li>
                <li className="text-sm">City: {sCity}</li>
                <li className="text-sm">Province: {sProvince}</li>
            </ul>
        </div>
    );
}