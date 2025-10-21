
export default function CounterControlComp( {incrementFunc} ) {

    return(
        <div>
            <button type="button" onClick={incrementFunc}>Increment</button>
        </div>
    );
}