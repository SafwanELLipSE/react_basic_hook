import './App.css';
import Demo from "./Demo";
import Son from "./compoents/Son";
import {DadaProvider} from "./compoents/Mycontext";

function App() {
  return (
    <div className="App">
      <Demo></Demo>
        {/*<Son name="Puti name is Kalam"/>*/}
        <DadaProvider value="Dada Send massage to puti">
            <Son/>
        </DadaProvider>
    </div>
  );
}

export default App;
