"use client";

import { useState } from "react";

export default function CounterPage() {

    const [count, setCount] = useState(0);

    // never call a setter directly in the component / page!
    // setCount(count + 1); // this creates an infinite loop

    const increment = () => {
        if (count < 10) {
            setCount(count + 1);
        }
        // if (count == 10) {
        //     setCount(0);
        // }
        // count = count + 1 // Do not modify the state variable directly!
    }

    const reset = () => setCount(0);

    let buttonStyles = "bg-green-700 hover:bg-green-500 active:bg-amber-700 text-white rounded p-2 cursor-pointer transition-colors"
    if (count >= 10) {
        buttonStyles = "text-gray-300 rounded p-2 bg-gray-500";
    }

    return (
        <main className="p-4">
            <h1 className="text-3xl mb-4">Simple Counter</h1>
            <p className="bg-blue-300 p-6 mb-4">Current Count: {count}</p>
            <button onClick={increment} className={buttonStyles}>Increment Counter</button>
            <button
                onClick={reset}
                className="bg-red-700 hover:bg-red-500 text-white rounded p-2 ml-4 cursor-pointer transition-colors">
                Reset Counter
            </button>
        </main>
    );
}