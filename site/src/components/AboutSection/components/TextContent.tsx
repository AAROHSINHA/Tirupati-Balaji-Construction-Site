export default function TextContent() {
  return (
    <div className="space-y-6">
      <div className="text-center lg:text-left">
        <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
          ABOUT
        </h2>
        <div className="w-16 h-2 bg-yellow-500 mx-auto lg:mx-0"></div>
      </div>

      <div className="text-gray-600 leading-relaxed text-base">
        <p>
          I'm a paragraph. Click here to add your own text and edit me. It's
          easy. Just click "Edit Text" or double click me to add your own
          content and make changes to the font. Feel free to drag and drop me
          anywhere you like on your page. I'm a great place for you to tell a
          story and let your users know a little more about you.
        </p>
        <br />
        <p>
          This is a great space to write long text about your company and your
          services. You can use this space to go into a little more detail about
          your company. Talk about your team and what services you provide. Tell
          your visitors the story of how you came up with the idea for your
          business and what makes you different from your competitors. Make your
          company stand out and show your visitors who you are.
        </p>
      </div>
    </div>
  );
}
