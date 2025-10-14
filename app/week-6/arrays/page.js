

export default function ArrayMethodsPage() {

    // Mutating Methods
    let array1 = [1, 2, 3, 4, 5];
    array1.push(6);
    let lastNum = array1.pop();
    array1.splice(2, 2);

    // Non-mutating Methods
    let numbers = [5, 3, 9, 1, 4];
    let doubled = numbers.map((number) => number * 2);
    let lessThanFive = numbers.filter((number) => number < 5);
    let concatNumbers = numbers.concat(doubled);
    let allNumbers = [...numbers, 12, 16, ...doubled];
    let sum = allNumbers.reduce( (accumulator, currentValue) => accumulator + currentValue, 6 )

    // Sort - Mutating
    const sortingLogic = (a,b) => {
        if( a < b ) return -1;
        if( a > b ) return 1;
        return 0;
    }
    // let sortedNumbers = allNumbers.sort(sortingLogic);
    let sortedNumbers = [...allNumbers]; // defensive copy to prevent mutation
    sortedNumbers.sort(sortingLogic);

    // toSorted - Non-Mutating
    let newSort = allNumbers.toSorted(sortingLogic);

    // Spread Operator
    let originalObject = { a: 1, b: 2 }
    let otherObject = { c: 3, d: 4 }
    let newObject = { ...originalObject, ...otherObject }
    // console.log(newObject);
    let referenceObject = originalObject;
    let defensiveCopy = {...originalObject}
    referenceObject.a = 5;
    defensiveCopy.b = 10;
    // console.log(originalObject);
    // console.log(referenceObject);
    // console.log(defensiveCopy);


    return (
        <main>
            <h1>Array Methods</h1>
            <p>{array1.join(" | ")}</p>
            <p>{lastNum}</p>
            <p>{numbers.join()}</p>
            <p>{doubled.join()}</p>
            <p>{lessThanFive.join()}</p>
            <p>{concatNumbers.join()}</p>
            <p>{allNumbers.join()}</p>
            <p>{sum}</p>
            <p>{sortedNumbers.join()}</p>
            <p>{newSort.join()}</p>

        </main>
    );
}