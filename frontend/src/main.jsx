import React, { useState } from "react";
import ReactDOM from "react-dom/client";

function App() {
  const [q, setQ] = useState("");
  const [a, setA] = useState("");
  const ask = async () => {
    const res = await fetch("/api/ask", {method:"POST", headers:{"Content-Type":"application/json"}, body: JSON.stringify({question:q})});
    const data = await res.json(); setA(data.answer);
  };
  return <div style={{maxWidth:800,margin:"40px auto",fontFamily:"Arial"}}>
    <h1>Intelligent Document Q&A</h1>
    <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Ask a question..." style={{width:"70%",padding:12}} />
    <button onClick={ask} style={{padding:12,marginLeft:8}}>Ask</button>
    <p>{a}</p>
  </div>
}
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
