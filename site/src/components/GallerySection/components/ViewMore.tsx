import { Link } from "react-router-dom";

export default function ViewMore() {
  return (
    <div className="text-center mb-12 mt-12">
      <button className="text-gray-800 font-semibold tracking-wide border-b-2 border-yellow-500 hover:text-yellow-600 hover:border-yellow-600 transition hover:cursor-pointer">
        <Link to={"/gallery"}>View More</Link>
      </button>
    </div>
  );
}
