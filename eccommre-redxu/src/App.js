import Card from "./components/Card";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="">
      <Navbar />
      <div
        className="gallery pt-12 grid gap-2 place-items-center md:grid-cols-2 
       lg:grid-cols-3  sm:grid-cols-2"
      >
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default App;
