import React from "react";

interface CounterProps { 
    contador: number;
}

export default (props: CounterProps) => {
    return (
        <p>{ props.contador }</p>
    )
}