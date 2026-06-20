import { useRef } from "react";

export default function Text(){
    let myRef = useRef(null);

    function handleClick(){
        console.log(myRef.current)
    }

    return (
        <>
        <div ref={myRef}>Hello</div>
        <button onClick={handleClick}>Click</button>
        </>
    );
}