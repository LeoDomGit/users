import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import Swal from "sweetalert2";
import Header from "../components/Header";
function Detail() {
  const { id } = useParams();
  console.log(id);
  const url = `https://api.trungthanhweb.com/api/`;
  const url1 = `https://api.trungthanhweb.com/images/`;
  const [course, setCourse] = useState({});
  const [module, setModule] = useState([]);
  const [schedule, setschedule] = useState([]);
  const [bookSchedule,setBookSchedule]= useState(0);
  console.log(bookSchedule);
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 1700,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  useEffect(() => {
    fetch(url + `getSingleCourses/` + id)
      .then((res) => res.json())
      .then((res) => {
        setCourse(res[0]);
        setModule(JSON.parse(res[0].detail));
      });
  }, [id]);
  useEffect(() => {
    var arr = [];
    fetch(url + `getScheduleUser/` + id)
      .then((res) => res.json())
      .then((res) => {
        res.forEach((el) => {
          var item = new Object();
          item.teacher = el.teacher;
          item.id = Number(el.id);
          item.schedule = JSON.parse(el.schedule)[0];
          arr.push(item);
        });
        setschedule(arr);
        console.log(schedule);
      });
  }, [id]);
  return (
    <>
      <Header />
      <section className="heading-page header-text" id="top">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h6>Get all details</h6>
              <h2>Online Teaching and Learning Tools</h2>
            </div>
          </div>
        </div>
      </section>
      <section className="meetings-page pb-5" id="meetings">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-12">
                  <div className="meeting-single-item">
                    <div className="thumb">
                      <div className="price">
                        <span>
                          {Intl.NumberFormat("en-US").format(course.price)} đ
                        </span>
                      </div>
                      <div className="date">
                        {/* <h6>
                      Nov <span>12</span>
                    </h6> */}
                      </div>
                      <a href="#">
                        <img src="assets/images/single-meeting.jpg" alt="" />
                      </a>
                    </div>
                    <div className="down-content">
                      <div className="row">
                        <div className="col-md-5">
                          <a href="#">
                            <h4 style={{ color: "red" }}>{course.name}</h4>
                          </a>
                          <br />
                          <p style={{'fontSize':'18px'}}>{course.summary}</p>
                          <br />
                          <h5>
                            Giá :{" "}
                            {Intl.NumberFormat("en-US").format(course.price)} đ
                          </h5>
                          <br />
                          <h5>Giờ học : {course.duration} h</h5>
                        </div>
                        <div className="col-md-3"></div>
                        {schedule &&
                        <div className="col-md">
                          <select name="" className="form-control w-100" onChange={(e)=>setBookSchedule(e.target.value)} id="">
                            {schedule.length>0 && schedule.map((item,index)=>(
                              <option key={index} value={item.id}>{item.teacher} - {item.schedule.time}</option>
                            ))}
                          </select>
                          <button className="btn btn-primary w-100 mt-3" >Thêm</button>
                        </div>
                        }
                      </div>
                      <div className="row mt-4">
                        <div
                          className="accordion accordion-flush"
                          id="accordionFlushExample"
                        >
                          {module &&
                            module.length > 0 &&
                            module.map((item, index) => (
                              <div key={index} className="accordion-item">
                                <h2
                                  className="accordion-header"
                                  id="flush-headingOne"
                                >
                                  <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target={`#flush-collapse${++index}`}
                                    aria-expanded="false"
                                    aria-controls={`flush-collapse${index}`}
                                  >
                                    <h5>{item.module}</h5>
                                  </button>
                                </h2>
                                <div
                                  id={`flush-collapse${index}`}
                                  className="accordion-collapse collapse"
                                  aria-labelledby={`flush-heading${++index}`}
                                  data-bs-parent="#accordionFlushExample"
                                >
                                  <div className="accordion-body">
                                    <div
                                      style={{
                                        fontFamily:
                                          "'Times New Roman', Times, serif",
                                      }}
                                      dangerouslySetInnerHTML={{
                                        __html: item.detail,
                                      }}
                                    />
                                  </div>
                                </div>
                              </div>
                            ))}
                        </div>

                        <div className="col-lg-12">
                          <div className="share"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="main-button-red">
                    <a href="#">Back To Meetings List</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Detail;
