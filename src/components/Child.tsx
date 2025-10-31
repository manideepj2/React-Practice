
interface ChildProps {
    message: string;
    setDataToParent:(data:string)=>void;
}
function Child({message,setDataToParent}: Readonly<ChildProps>) {
  const dataToParent="Hello from Child";
  return (
    <>
      <div>Child</div>
      <p>message from Parent is : {message}</p>
      <button onClick={() => setDataToParent(dataToParent)}>Send to parent</button>
    </>
  )
}

export default Child