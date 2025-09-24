function GoogleMapEmbed() {
  return (
    <div className="flex items-center justify-center w-full h-[450px]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7534.496752212299!2d72.8255484383294!3d19.228004158405618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b137194d9751%3A0x15cd09dd0becb625!2sGorai%201%2C%20Borivali%20West%2C%20Mumbai%2C%20Maharashtra%20400091!5e0!3m2!1sen!2sin!4v1758707720969!5m2!1sen!2sin"
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
