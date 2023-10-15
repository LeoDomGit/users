import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
function Slider() {
  const options = {
    loop: true,
    center: true,
    items: 3,
    margin: 10,
    autoplay: true,
    dots: true,
    autoplayTimeout: 8500,
    smartSpeed: 450,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
  };

  return (
    <>
      <section className="services  upcoming-meetings">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 mt-4">
              <OwlCarousel className="owl-service-item owl-carousel"{...options}>
                <div className="item">
                  <div className="icon">
                    <img src="assets/images/service-icon-01.png" alt="" />
                  </div>
                  <div className="down-content">
                    <h4>Best Education</h4>
                    <p>
                      Suspendisse tempor mauris a sem elementum bibendum.
                      Praesent facilisis massa non vestibulum.
                    </p>
                  </div>
                </div>
                <div className="item">
                  <div className="icon">
                    <img src="assets/images/service-icon-02.png" alt="" />
                  </div>
                  <div className="down-content">
                    <h4>Best Teachers</h4>
                    <p>
                      Suspendisse tempor mauris a sem elementum bibendum.
                      Praesent facilisis massa non vestibulum.
                    </p>
                  </div>
                </div>
                <div className="item">
                  <div className="icon">
                    <img src="assets/images/service-icon-03.png" alt="" />
                  </div>
                  <div className="down-content">
                    <h4>Best Students</h4>
                    <p>
                      Suspendisse tempor mauris a sem elementum bibendum.
                      Praesent facilisis massa non vestibulum.
                    </p>
                  </div>
                </div>
                <div className="item">
                  <div className="icon">
                    <img src="assets/images/service-icon-02.png" alt="" />
                  </div>
                  <div className="down-content">
                    <h4>Online Meeting</h4>
                    <p>
                      Suspendisse tempor mauris a sem elementum bibendum.
                      Praesent facilisis massa non vestibulum.
                    </p>
                  </div>
                </div>
                <div className="item">
                  <div className="icon">
                    <img src="assets/images/service-icon-03.png" alt="" />
                  </div>
                  <div className="down-content">
                    <h4>Best Networking</h4>
                    <p>
                      Suspendisse tempor mauris a sem elementum bibendum.
                      Praesent facilisis massa non vestibulum.
                    </p>
                  </div>
                </div>
              
              </OwlCarousel>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Slider;
