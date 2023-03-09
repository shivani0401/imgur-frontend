import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Navbar from "./components/navbar";
import WelcomeMsg from "./components/WelcomeMsg";
import TrendingTags from "./components/TrendingTags";
import SortBy from "./components/SortBy";
import ImageCard from "./components/imageCard";

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
  integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
  crossorigin="anonymous"
/>

function App() {
  return (
    <div className="App">
      <Navbar />
      <WelcomeMsg />
      <TrendingTags />
      <SortBy />
      <ImageCard />
    </div>
  );
}

export default App;
