"use client";

import { useState } from "react";
import CounterDisplayComp from "./counter-display";
import CounterControlComp from "./counter-control";

export default function CounterPage(){

    let [counter, setCounter] = useState(0);
    // var myCounter = 0;

    function incrementCounter(){
        // counter = counter + 1; // Don't do this!
        // myCounter = myCounter + 1; // this also won't work!
        setCounter(counter + 1);
        setCounter(counter + 1);
        setCounter(counter + 1);
        setCounter(counter + 1);
    }

    return(
        <main>
            <CounterControlComp incrementFunc={incrementCounter} />
            {/* <CounterControlComp incrementFunc={ () => setCounter( counter + 1)  } /> */}
            <CounterDisplayComp counterDisplay={counter} />
        </main>
    );
}