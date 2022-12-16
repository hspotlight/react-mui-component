import "./App.css";
import CommentSection from "./components/CommentSection";

function App() {
  return (
    <div
      className="App"
      style={{ width: "100%", display: "flex", justifyContent: "center" }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <CommentSection />
      </div>
    </div>
  );
}

export default App;
