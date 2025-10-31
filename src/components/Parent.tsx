import { useState } from "react";
import Child from "./Child";

function Parent() {
  const dataToPass = "Hello from Parent";
  const [dataFromChild, setDataFromChild] = useState<string>("");

  function handleChildEvent(data: string): void {
    setDataFromChild(data);
  }

  return (
    <>
      <div>Parent</div>
      <p>data from Child is : {dataFromChild}</p>
      <Child
        message={dataToPass}
        setDataToParent={(data) => handleChildEvent(data)}
      />
    </>
  );
}

export default Parent;
