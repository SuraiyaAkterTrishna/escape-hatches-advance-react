import { useRef } from "react";

export default function Text(){
    let myRef = useRef(null);

    function handleClick(){
        myRef.current.textContent = "Hello Clicked"
    }

    return (
        <>
        <div ref={myRef}>Hello</div>
        <button onClick={handleClick}>Click</button>
        </>
    );
}