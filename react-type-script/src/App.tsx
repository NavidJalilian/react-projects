import "./App.css";

function App() {
  return (
    <div className="App    h-screen">
      <h4 className="text-gray-900 text-center pt-5 text-2xl uppercase">
        working
      </h4>
      <Input placeholder="search" />
      {/* call to action btn */}
      <Button/>
    </div>
  );
}

export default App;

function Input({ placeholder = "" }) {
  return (
    <div className="capitalize mx-auto container p-1 relative flex w-full flex-wrap items-stretch mb-3">
      <span className="z-10 h-full leading-snug font-normal absolute text-center text-slate-300 absolute rounded text-base items-center justify-center w-8 pl-3 py-3"></span>
      <input
        type="text"
        placeholder={placeholder}
        className=" capitalize px-2 py-1 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full pl-10"
      />
    </div>
  );
}
function Button   (){
  return (
    <button className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md  outline-offset-2 focus:outline-pink-400  mr-1 mb-1 ease-linear transition-all duration-150" type="button"
      >
  Small
</button>
  )
}