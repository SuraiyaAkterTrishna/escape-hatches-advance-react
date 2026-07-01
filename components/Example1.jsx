/* eslint-disable no-unused-vars */
import { useState } from "react";

export default function Example1(){
    
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const fullName = firstName + " " + lastName;
    return (
        <div>
            <p>{fullName}</p>
        </div>
    );
}