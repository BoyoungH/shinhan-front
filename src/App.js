import "./styles/reset.css";
import "./styles/global.css"; // 우선순위를 가짐
import TopNav from "./components/TopNav/TopNav";

function App() {
  return <div className="layout"><TopNav /></div>;
  
}

export default App;
