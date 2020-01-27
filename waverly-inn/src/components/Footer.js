import React from 'react';

function Footer(props) {
  return (
    <footer>
      <div className="footer-img">
        <img src="images/Logo_WaverlyInn_White.png" alt="The Waverly Inn and Garden" />
      </div>
      <div className="copyright">
        <p4>©2020 The Waverly Inn & Garden. All rights reserved.</p4>
      </div>
      <div className="contact">
        <h4>Contact Us</h4>
        <p4>16 Bank Street, New York, NY 10014</p4>
        <p4>(917) 828-1154</p4>
        <p4>fritz@thewaverlyinn.com</p4>
      </div>
      <div className="social">
        <h4>Follow Us</h4>
        <a target="_blank" href="https://www.facebook.com/pages/Waverly-Inn/121071064574087"><img src="/images/Icon_Facebook.svg" alt="Facebook" /></a>
        <a target="_blank" href="https://www.instagram.com/explore/locations/387124/waverly-inn/?hl=en"><img src="/images/Icon_Instagram.svg" alt="Instagram" /></a>
      </div>
    </footer>
  )
}

export default Footer;