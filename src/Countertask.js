import React, { useState } from 'react'

function Countertask() {
    const[value,setvalue]=useState(0);
  return (
    <div>
      <p>Counter value:{value}</p>
      <Child value={value} setvalue={setvalue}/>
    </div>
  );
};
const Child =({value,setvalue})=>{
    return <button onClick={()=>{setvalue(value+1)}}>Counter</button>
}
export default Countertask;
