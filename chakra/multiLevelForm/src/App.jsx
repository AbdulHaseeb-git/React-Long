import './App.css'
import { useState } from 'react';


function App() {
  const [name, setName] = useState("Haseeb");
  const [selection, setSelection]= useState("one");
  const [tnc, setTnc] = useState("1");
  const getFormData=(e)=>{
        e.preventDefault();
        console.log(name,selection,tnc);
  }

  return <form onSubmit={getFormData}>
    <h1>React Form Handling</h1>
    <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} />
    <select value={selection} onChange={(e)=>{setSelection(e.target.value)}}>
      <option>one</option>
      <option>two</option>
      <option>three</option>
    </select>
    <input type="checkbox" value={tnc} onChange={(e)=>{setTnc(e.target.checked)}}/><span>Terms and conditions</span>
    <button type="submit">Submit</button>
  </form>
}

export default App
