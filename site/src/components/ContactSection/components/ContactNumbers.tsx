export default function ContactNumbers() {
  return (
    <div className="mb-8">
      {/* Accent bar */}
      <div className="w-25 h-3.5 bg-yellow-400 mb-4"></div>

      {/* Title */}
      <h2 className="text-3xl font-bold text-gray-900 mb-3">Contact</h2>

      {/* Numbers */}
      <div className="text-lg text-gray-700 leading-relaxed space-y-1">
        <p>+91 98765 43210</p>
        <p>+91 91234 56789</p>
        <p>+91 99887 77665</p>
      </div>
    </div>
  );
}
