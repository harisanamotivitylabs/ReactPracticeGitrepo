import React, { useState } from "react";
import ChildFun from "./ChildFun";

function Practice({name,heroname})
{
    var [parentName,setParentName]=useState("hari")

    return <>
    <h1>Hello World</h1>
    <h2>{name}{heroname}</h2>
    <ChildFun parentName={parentName}/>
    </>

}

export default Practice