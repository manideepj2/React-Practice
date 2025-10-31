import { useState } from "react";
import Child from "./Child";

function Parent() {
  const [dataToChild, setDataToChild] = useState<string>("Hello from Parent");
  const [dataFromChild, setDataFromChild] = useState<string>("");
  const [showButton, setshowButton] = useState<boolean>(false);

  function handleChildEvent(data: string): void {
    if (data) {
      setDataFromChild(data);
      setDataToChild("Data received successfully from Child");
      setshowButton(!showButton);
    }
  }

  return (
    <>
      <div>Parent</div>
      <p>data from Child is : {dataFromChild}</p>
      <div>{
          showButton && <button >Claps</button> // equivalent to if conditional rendering
        }</div> 
      <Child
        message={dataToChild}
        setDataToParent={(data) => handleChildEvent(data)}
      />
    </>
  );
}

export default Parent;
