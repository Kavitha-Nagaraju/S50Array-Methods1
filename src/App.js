import logo from './logo.svg';
import './App.css';
import TenthResult from './classes/TenthResult';

function App() {
  let tenth = new TenthResult();
  tenth.calculateResult();

  console.log(TenthResult.passMarks);


  let actorsOfKalki=["Keerthi Suresh","Deepika padukone","Prabas","RajaMouli","Rajendhra Prasadh","anitha"];
  return (
  
   <><button onClick={() => {
      console.log(actorsOfKalki.length);
      console.log(actorsOfKalki);
    } }>Lenth</button><button onClick={() => {
      for (let i = 0; i <= 5; i++)
        console.log(actorsOfKalki[i]);
    } }>For Loop</button><button onClick={() => {
      console.log(actorsOfKalki.push("Kavitha"));
      console.log(actorsOfKalki)
    } }>Push</button>
    <button onClick={()=>{
      console.log(actorsOfKalki.pop());
      console.log(actorsOfKalki)
    }}>Pop</button>
    <button onClick={()=>{
      console.log(actorsOfKalki.shift())
      console.log(actorsOfKalki)
    }}>Shift</button>
    <button onClick={()=>{
      console.log(actorsOfKalki)
      console.log(actorsOfKalki.unshift("Anitha"))
    }}>UnShift</button>
    <button onClick={()=>{
      console.log(actorsOfKalki[3]);
      console.log(actorsOfKalki.at(6))
    }}>At</button>
    <button onClick={()=>{
      console.log(actorsOfKalki);
      console.log(actorsOfKalki.toString());
    }}>toString</button>
    <button onClick={()=>{
      console.log(actorsOfKalki)
      console.log(actorsOfKalki.splice(3,2))
    }}>Splice Removing</button>
    <button onClick={()=>{
           console.log(actorsOfKalki)
            console.log(actorsOfKalki.splice(3,2, "banana","mango"))
    }}>Splice Adding</button></>
  );
}

export default App;
