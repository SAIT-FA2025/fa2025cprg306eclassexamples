import StudentComp from "./student-component";
import StudentCompObject from "./student-component-object";
import { studentThree } from "./student-data";

export default function PropsPage() {

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

    let studentTwo = {
        fName: "Bob",
        age: 21,
        address: {
            city:"Edmonton",
            province:"AB"
        }
    }

    return (
        <main>
            <h1>Student List</h1>
            <StudentComp sName="Kevin" sAge={27} sCity="Lethbridge" sProvince="AB" />
            <StudentComp 
                sName={studentOne.fName}
                sAge={studentOne.age}
                sCity={studentOne.address.city}
                sProvince={studentOne.address.province}
            />
            <StudentCompObject studentObj={studentOne} />
            <StudentCompObject studentObj={studentTwo} />
            {/* <StudentCompObject studentObj={studentThree} /> */}
        </main>
    );
}