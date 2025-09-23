

export default function FunctionPage(){

    // Basic Function
    function helloWorld(username, dayOfWeek){
        return "Hello World! My name is " + username + " and today is " + dayOfWeek + "!";
    }
    // Expression Function
    let helloWorld2 = function (username){
        return "Hello " + username;
    }
    // Arrow Function
    const helloWorld3 = (username) => {
        return "Hello " + username;
    }
    const helloWorld4 = (username) => "Hello " + username;
    const helloMath = (a,b) => a+b;

    // Higher Order Functions
    // Function that accepts a function as an argument
    const louder = (textOutputFunc, uName) => {
        // i should have some validation here!
        let thisText = textOutputFunc(uName);
        return thisText.toUpperCase();
    }
    // Function that returns a function
    const multiplyBy = (factor) => {
        return (number) => factor * number;
    }

    const multiplyByThree = multiplyBy(3);
    const multiplyByTen = multiplyBy(10);

    return(
        <main>
            <h1>Functions</h1>
            <p>{helloWorld("Alice", "Tuesday")}</p>
            <p>{helloWorld2("Robert")}</p>
            <p>{helloWorld3("John")}</p>
            <p>{helloWorld4("Steve")}</p>
            <p>{helloMath(3,4)}</p>
            <p>{louder(helloWorld2, "Jennifer")}</p>
            <p>{multiplyByThree(7)}</p>
            <p>{multiplyByTen(5)}</p>
        </main>
    );
}