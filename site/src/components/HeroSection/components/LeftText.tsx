export default function LeftText() {
  return (
    <div className="flex-1 max-w-2xl">
      <h1 className="mt-6 text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight">
        Your Home,{" "}
        <div>
          Built with {""}{" "}
          <span className="text-yellow-400 drop-shadow-md">Care</span>
        </div>
      </h1>
      <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 leading-relaxed max-w-xl mx-auto md:mx-0">
        From foundation to finishing — trusted construction services in Mumbai.
      </p>
    </div>
  );
}
