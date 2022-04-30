import React from "react"
import { socialMedia } from "../model/SocialMediaModel"

const Footer = () => {
return (
    <footer className="bg-navy text-inverse">
        <div className="container py-10 py-md-5">
          <div className="row gy-6 gy-lg-0">
            <div className="col-md-12 col-lg-12" style={{alignContent: 'center'}}>
              <div className="widget text-justify">
                <img
                  className="mb-4"
                  src="/logoasd.png"
                  srcSet="/logoasd.png 2x"
                  alt=""
                  style={{height: '80px'}}
                />
                <nav className="nav social social-white">
                  <a href="/">
                    <i className="uil uil-twitter"></i>
                  </a>
                  <a href="/">
                    <i className="uil uil-facebook-f"></i>
                  </a>
                  <a href="/">
                    <i className="uil uil-dribbble"></i>
                  </a>
                  <a href={socialMedia.instagramPeduliASD} target="_blank">
                    <i className="uil uil-instagram"></i>
                  </a>
                  <a href="/">
                    <i className="uil uil-youtube"></i>
                  </a>
                </nav>
                <p className="mb-4">
                  © {`${new Date().getFullYear()}`} PeduliASD All rights reserved.<br className="d-none d-lg-block" />
                </p>
                {/* <!-- /.social --> */}
              </div>
              {/* <!-- /.widget --> */}
            </div>
          </div>
        </div>
      </footer>
)
}

export default Footer