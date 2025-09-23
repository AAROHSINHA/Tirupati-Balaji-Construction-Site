export default function () {
  return (
    <div className="font-">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Head Office</h2>
      <div className="space-y-4 text-md text-gray-600">
        <address className="not-italic leading-relaxed">
          <div className="font-semibold text-gray-900">
            C-1166 Near plot 67, Gorai
          </div>
          <div>Borivali West, Mumbai - 400091</div>
        </address>
        <div className="space-y-2">
          <a
            href="mailto:info@mysite.com"
            className="block font-semibold text-gray-900 hover:text-blue-600 transition-colors"
          ></a>
          <a
            href="tel:123-456-7890"
            className="block font-semibold text-gray-900 hover:text-blue-600 transition-colors"
          >
            Tel: +91 99878 87573
          </a>
        </div>
      </div>
    </div>
  );
}
