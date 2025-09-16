

export default function ObjectsPage() {

    let studentOne = {
        fName: "Alice",
        age: 25,
        hasGraduated: false,
        schedule: ["CPRG123", "CPRG456", "CPRG789", "CPRG306"],
        address: {
            street: "123 Main St.",
            city: "Calgary",
            province: "AB",
        }
    }


    let {
        fName,
        age: studentAge,
        // schedule:[class1,class2,class3,webdev2]
        // schedule:[,,,webdev2]
        schedule:{3:webdev2},
        address:{city}
    } = studentOne;

    return (
        <main>
            <h1>Objects</h1>
            <h2>Dot Notation</h2>
            <p>Name: {studentOne.fName}</p>
            <p>Age: {studentOne.age}</p>
            <p>WebDev2: {studentOne.schedule[3]}</p>
            <p>City: {studentOne.address.city}</p>
            <h2>Destructuring</h2>
            <p>Name: {fName}</p>
            <p>Age: {studentAge}</p>
            <p>WebDev2: {webdev2}</p>
            <p>City: {city}</p>
        </main>
    );
}