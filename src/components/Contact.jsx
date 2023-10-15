import React from 'react'

function Contact() {
  return (
    <>
    <section className="contact-us" id="contact">
  <div className="container">
    <div className="row">
      <div className="col-lg-9 align-self-center">
        <div className="row">
          <div className="col-lg-12">
            <form id="contact" action="" method="post">
              <div className="row">
                <div className="col-lg-12">
                  <h2>Let's get in touch</h2>
                </div>
                <div className="col-lg-4">
                  <fieldset>
                    <input
                      name="name"
                      type="text"
                      id="name"
                      placeholder="YOURNAME...*"
                      required=""
                    />
                  </fieldset>
                </div>
                <div className="col-lg-4">
                  <fieldset>
                    <input
                      name="email"
                      type="text"
                      id="email"
                      pattern="[^ @]*@[^ @]*"
                      placeholder="YOUR EMAIL..."
                      required=""
                    />
                  </fieldset>
                </div>
                <div className="col-lg-4">
                  <fieldset>
                    <input
                      name="subject"
                      type="text"
                      id="subject"
                      placeholder="SUBJECT...*"
                      required=""
                    />
                  </fieldset>
                </div>
                <div className="col-lg-12">
                  <fieldset>
                    <textarea
                      name="message"
                      type="text"
                      className="form-control"
                      id="message"
                      placeholder="YOUR MESSAGE..."
                      required=""
                      defaultValue={""}
                    />
                  </fieldset>
                </div>
                <div className="col-lg-12">
                  <fieldset>
                    <button type="submit" id="form-submit" className="button">
                      SEND MESSAGE NOW
                    </button>
                  </fieldset>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="col-lg-3">
        <div className="right-info">
          <ul>
            <li>
              <h6>Phone Number</h6>
              <span>010-020-0340</span>
            </li>
            <li>
              <h6>Email Address</h6>
              <span>info@marathon.edu</span>
            </li>
            <li>
              <h6>Street Address</h6>
              <span>Việt Nam</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div className="footer">
    <p>
        Footer
    </p>
  </div>
</section>

    </>
  )
}

export default Contact