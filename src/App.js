import './App.css';
import Heading from "./components/Heading";
import Main from "./components/Main";

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <>
        <div className='bg-violet-950'>

          <Heading title="Calculator" />

           <Main />
         </div>
         
    </>

  );
}

export default App;
