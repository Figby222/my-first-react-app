import './State.css';
import { useState } from "react";

function State() {
    const [ currentColor, setColor ] = useState("blue");

    const handleColor = function() {
        if (currentColor === "blue") {
            setColor("red");
            return;
        }

        setColor("blue");
    }

    return (
        <div className={currentColor}>
            <h1>Hi this is Statefarm</h1>
            <button onClick={handleColor}>Click me!</button>
        </div>
    )
}

export default State;