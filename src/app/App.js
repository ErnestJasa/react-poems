import 'bootstrap/dist/css/bootstrap.min.css'
import Search from "../search/Search";
import Home from "../home/Home";
function App() {
  return (
    <div>
        <div className="nav navbar bg-dark text-light mb-5">
            <h2 className="mx-5">Poem search</h2>
        </div>
      <Home/>
    </div>
  );
}

export default App;
