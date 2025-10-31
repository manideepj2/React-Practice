import { useState } from "react";

interface ChildProps {
    message: string;
    setDataToParent:(data:string)=>void;
}
function Child({message,setDataToParent}: Readonly<ChildProps>) {
  const dataToParent="Hello from Child";
  const [name,setName]=useState<string>("");
  const [names,setNames]=useState<string[]>([]);
  const [showNames,setShowNames]=useState<boolean>(false);

  const handleBlur=(value:string):void=>{
    setNames([...names,value]);
    setName("");
  }

  return (
    <>
      <div>Child</div>
      <p>message from Parent is : {message}</p>
      <button onClick={() => setDataToParent(dataToParent)}>
        Send to parent
      </button>
      <br />
      <input
        type="text"
        placeholder="Enter name"
        onBlur={(e) => handleBlur(e.target.value)}
      />
      <br />
      {!showNames ? (
        <button onClick={() => setShowNames(!showNames)}>Display Names</button>
      ):  <button onClick={() => setShowNames(!showNames)}>Hide Names</button>}
      <br />
      <div>
        {showNames && names.map((name, index) => <p key={index}>{name}</p>)}
      </div>
    </>
  );
}

export default Child