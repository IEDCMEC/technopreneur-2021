import "./App.css";
import Router from "./Routes/Routes";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function App() {
    return <Router / > ;
}

export default App;