import Card from "./Card";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="">
      <Navbar />
      <div className="gallery grid gap-2 place-items-center md:grid-cols-2  lg:grid-cols-3 sm:grid-cols-1">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default App;
