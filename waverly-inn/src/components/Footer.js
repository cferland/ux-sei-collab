import React from 'react';

function Footer(props) {
  return (
    <footer>
      <div className="footer-img">
        <img className="logo" src="images/Logo_WaverlyInn_White.png" alt="The Waverly Inn and Garden" />
      </div>
      <div className="copyright">
        <p className="p4">©2020 The Waverly Inn & Garden.</p>
        <p className="p4">All rights reserved.</p>
      </div>
      <div className="contact" id="contact">
        <h4>Contact Us</h4>
        <p className="p4">16 Bank Street, New York, NY 10014</p>
        <p className="p4">(917) 828-1154</p>
        <p className="p4">fritz@thewaverlyinn.com</p>
      </div>
      <div className="social">
        <h4>Follow Us</h4>
        <div className="icon"><a target="_blank" href="https://www.facebook.com/pages/Waverly-Inn/121071064574087" rel="noopener noreferrer"><img src="/images/Icon_Facebook.svg" alt="Facebook" /></a></div>
        <div className="icon"><a target="_blank" href="https://www.instagram.com/explore/locations/387124/waverly-inn/?hl=en" rel="noopener noreferrer"><img src="/images/Icon_Instagram.svg" alt="Instagram" /></a></div>
      </div>
      <div id="contact-mobile"></div>
    </footer>
  )
}

export default Footer;