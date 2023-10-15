import React from "react";

function Subheader() {
  return (
    <>
      <div className="sub-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-sm-8">
              <div className="left-content">
                <p>
                  This is an educational <em>HTML CSS</em> template by
                  TemplateMo website.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-4">
              <div className="right-icons">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa fa-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-behance" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-linkedin" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Subheader;
