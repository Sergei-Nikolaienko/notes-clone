import "./App.scss";
import Header from "./components/Header/Header";
import Workspace from "./components/Workspace/Workspace";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <Sidebar />
        <Workspace />
      </main>
    </div>
  );
}

export default App;
