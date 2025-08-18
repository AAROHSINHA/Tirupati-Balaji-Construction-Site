export default function ContactInfo() {
  return (
    <div className="max-w-5xl mx-auto px-2 py-16git add">
      <div className="grid md:grid-cols-2 gap-16">
        {/* Inquiries Section */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Inquiries</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            For any inquiries, questions or commendations, please call:{" "}
            <a
              href="tel:123-456-7890"
              className="font-semibold text-gray-900 hover:text-blue-600 transition-colors"
            >
              123-456-7890
            </a>{" "}
            or fill out the following form
          </p>
        </div>

        {/* Head Office Section */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Head Office</h2>
          <div className="space-y-6 text-lg text-gray-600">
            <address className="not-italic leading-relaxed">
              <div className="font-semibold text-gray-900">
                500 Terry Francine Street
              </div>
              <div>San Francisco, CA 94158</div>
            </address>
            <div className="space-y-2">
              <a
                href="mailto:info@mysite.com"
                className="block font-semibold text-gray-900 hover:text-blue-600 transition-colors"
              >
                info@mysite.com
              </a>
              <a
                href="tel:123-456-7890"
                className="block font-semibold text-gray-900 hover:text-blue-600 transition-colors"
              >
                Tel: 123-456-7890
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
