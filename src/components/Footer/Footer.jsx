import React from "react";
import "./footer.css";

export default function Footer(props) {
  return (
    <div className="wrapper_footer">
      <div className="wrapper_img">
        <div className="footer_img_holder">
          <img
            src="https://seeklogo.com/images/I/instagram-new-2016-glyph-logo-84CB825424-seeklogo.com.png"
            alt="Instagram"
            className="footer_img"
          />
          <img
            src="https://logowik.com/content/uploads/images/324_facebookicon.jpg"
            alt="Facebook"
            className="footer_img"
          />
          <img
            src="https://cdn.freebiesupply.com/logos/thumbs/2x/github-icon-logo.png"
            alt="Github"
            className="footer_img"
          />
        </div>
      </div>
    </div>
  );
}
