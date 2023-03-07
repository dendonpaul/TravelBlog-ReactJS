import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Router from "./routes/Router";

function App() {
  return (
    <div className="showcase">
      <Header />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
