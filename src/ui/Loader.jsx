import SVGloading from "../assets/pizza-loader.svg";

const Loader = () => {
  return (
    <div className="absolute bg-slate-200/20 inset-0 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="flex flex-col items-center justify-between">
        <div className="loader">
          <img
            src={SVGloading}
            alt="Loading..."
            className="sm:w-64 sm:h-64 w-20 h-20"
          />
        </div>
        <div className="mt-5">
          <p className="font-kapizza sm:text-4xl text-md">LOADING...</p>
        </div>
      </div>
    </div>
  );
};

export default Loader;
