import "./App.css";
// import Main from "./components/Main";
import MainSide from "./components/MainSide";
// import SideBar from "./components/SideBar";
import ContextProvider from "./context/Context";

function App() {
  return (
    <div className="body">
      <ContextProvider>
        <MainSide />
      </ContextProvider>
    </div>
  );
}

export default App;
