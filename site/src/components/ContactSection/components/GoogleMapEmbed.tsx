function GoogleMapEmbed() {
  return (
    <div className="flex items-center justify-center w-full h-[450px]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.020309684803!2d-122.41941528468137!3d37.774929779759704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c5a9f5d29%3A0xabcdef123456789!2sSphere%20Construction!5e0!3m2!1sen!2sus!4v1616546400000!5m2!1sen!2sus"
        width="1000"
        height="400"
        style={{ border: 0, borderRadius: "12px" }}
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default GoogleMapEmbed;
