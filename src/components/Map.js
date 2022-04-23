import React from "react";

function Map() {
  return (
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6738.348158148659!2d-6.254779501188981!3d53.33670711830869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48670e9f1f832db7%3A0xf64dacb103869840!2s27%20St%20Stephen&#39;s%20Green%2C%20Dublin!5e0!3m2!1sen!2sie!4v1649188637886!5m2!1sen!2sie'
        width="95%"
        height="100%"
        className="map"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
  );
}

export default Map;
