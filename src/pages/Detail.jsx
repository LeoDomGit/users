import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Swal from "sweetalert2";
import Header from "../components/Header";
import Button from "react-bootstrap/Button";
import axios from "axios";
import Loader from "../components/Loading.jsx/Loader";
function Detail() {
  const { id } = useParams();
  const url = `https://api.trungthanhweb.com/api/`;
  const url1 = `https://api.trungthanhweb.com/images/`;
  const [course, setCourse] = useState({});
  const [module, setModule] = useState([]);
  const [schedule, setschedule] = useState([]);
  const [bookSchedule, setBookSchedule] = useState(0);
  const [ScheduleTime, setTime] = useState(null);
  const [cusName, setCusName] = useState("");
  const [cusEmail, setCusEmail] = useState("");
  const [cusPhone, setCusPhone] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [loading ,setLoading]= useState(false);
  const validPhone = /(0[3|5|7|8|9])+([0-9]{8})\b/g;
  const handleShow = () => setShow(true);

  const setBookSchedule1 = (id) => {
    var obj = new Object();
    schedule.forEach((el) => {
      if (el.id == id) {
        obj = el;
        setBookSchedule(obj.id)
      }
    });
    setTime(obj.schedule.time);
  };
  const setPhone1 = (phone) => {
    if (phone.match(validPhone)) {
      setCusPhone(phone);
    }
  };
  const setEmail1 = (email) => {
    if (email.match(/(.+)@(gmail+)\.(com)/i)) {
      setCusEmail(email);
    }
  };
  const handleShow1 = () => {
    if(ScheduleTime==null){
      setTime(schedule[0].schedule.time);
    }
    handleShow();
  };
  const submitBooking = () => {
    if(!bookSchedule){
      Toast.fire({
        icon: "error",
        title: "Vui lòng chọn giờ học",
      });
    }else  if (cusName == "") {
      Toast.fire({
        icon: "error",
        title: "Thiếu tên học viên",
      });
    } else if (cusEmail == "") {
      Toast.fire({
        icon: "error",
        title: "Email chưa hợp lệ",
      });
    } else if (cusPhone == "") {
      Toast.fire({
        icon: "error",
        title: "Số điện thoại chưa hợp lệ",
      });
    } else {
      setLoading(true);
      axios
        .post(url+"submitBill", {
          email: cusEmail,
          phone: cusPhone,
          name: cusName,
          idSchedule: bookSchedule,
        })
        .then(function (res) {

          if (res.data.check == true) {
            setLoading(false);
            Toast.fire({
              icon: "success",
              title: "Đã đăng ký thành công",
            }).then(()=>{
              window.location.replace('/');
            })
          }
          if(res.data.check==false){
            setLoading(false);
            if(res.data.msg.email){
              Toast.fire({
                icon: "error",
                title: res.msg.email,
              })
            }else if(res.data.msg.phone){
              Toast.fire({
                icon: "error",
                title: res.msg.phone,
              })
            }else if(res.data.msg.idSchedule){
              Toast.fire({
                icon: "error",
                title: res.data.msg.idSchedule,
              })
            }
          }
         
          
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };
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
        // console.log();
        setBookSchedule(schedule[0]);
      });
  }, [id]);
  return (
    <>
      <Header />
      {loading && (<Loader/>)}
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
      >
        <Modal.Header closeButton onClick={(e) => handleClose()}>
          <Modal.Title id="contained-modal-title-vcenter">
            <h4>Đăng ký khóa học</h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row w-100">
            <div className="col-md">
              <input
                type="text"
                className={`mb-2 form-control ${
                  cusName == "" ? "border border-danger" : ""
                }`}
                onChange={(e) => setCusName(e.target.value)}
                placeholder="Tên học viên"
              />
              <input
                type="text"
                className={`form-control mb-2 ${
                  cusPhone == "" ? "border border-danger" : ""
                }`}
                placeholder="Số diện thoại học viên"
                onChange={(e) => setPhone1(e.target.value)}
              />
              <input
                type="text"
                className={`form-control mb-2 ${
                  cusEmail == "" ? "border border-danger" : ""
                }`}
                onChange={(e) => setEmail1(e.target.value)}
                placeholder="Email học viên"
              />
              <h5 className="mt-3 ms-2">Lịch học: </h5>
              <p className="ms-2" style={{ fontSize: "20px" }}>
                {ScheduleTime}
              </p>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={(e) => submitBooking()}>Đăng Ký</Button>
        </Modal.Footer>
      </Modal>
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
                          <p style={{ fontSize: "18px" }}>{course.summary}</p>
                          <br />
                          <h5>
                            Giá :
                            {Intl.NumberFormat("en-US").format(course.price)} đ
                          </h5>
                          <br />
                          <h5>Giờ học : {course.duration} h</h5>
                        </div>
                        <div className="col-md-3"></div>
                        {schedule && (
                          <div className="col-md">
                            <select
                              name=""
                              className="form-control w-100"
                              onChange={(e) => setBookSchedule1(e.target.value)}
                              id=""
                            >
                              <option value="0" disabled selected> Chọn giờ học</option>
                              {schedule.length > 0 &&
                               schedule.map((item, index) => (
                                  <option key={index} value={item.id}>
                                    {item.teacher} - {item.schedule.time}
                                  </option>
                                ))}
                            </select>
                            <button
                              className="btn btn-primary w-100 mt-3"
                              onClick={(e) => handleShow1()}
                            >
                              Thêm
                            </button>
                          </div>
                        )}
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
