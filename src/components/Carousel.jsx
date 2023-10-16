import React from 'react'

function Carousel() {
  return (
    <>
      {/* ***** Main Banner Area Start ***** */}
  <section className="section main-banner" id="top" data-section="section1">
    <video autoPlay="" muted="" loop="" id="bg-video">
      <source src="assets/images/course-video.mp4" type="video/mp4" />
    </video>
    <div className="video-overlay header-text">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="caption">
              <h6>Hello Students</h6>
              <h2>Welcome to Education</h2>
              <p>
              </p>
              <div className="main-button-red">
                <div className="scroll-to-section">
                  <a href="#contact">Join Us Now!</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* ***** Main Banner Area End ***** */}
    </>
  )
}

export default Carousel