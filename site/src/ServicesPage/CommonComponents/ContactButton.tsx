import { useNavigate } from "react-router-dom";

export default function ContactButton() {
  const navigate = useNavigate();
  const handleContact = () => {
    navigate("/#contact");
  };
  return (
    <div className="flex flex-col items-center space-y-2 my-10">
      <button
        className="bg-black text-yellow-400 font-semibold px-8 py-4 rounded-lg hover:bg-gray-900 transition-colors duration-200 shadow-lg hover:shadow-xl transform transition-all hover:cursor-pointer"
        onClick={handleContact}
      >
        GET INTO CONTACT
      </button>
    </div>
  );
}
