import React, { useEffect, useState } from "react";
import Subheader from "../components/Subheader";

import { getEdu } from "../redux/eduSlice";
import { getCourse } from "../redux/courseSlice";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Contact from '../components/Contact'
import Carousel from "../components/Carousel";
function Home() {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const { educations, loading } = useSelector((state) => state.educations);
  const { courses, loadingCourse } = useSelector((state) => state.courses);
  const [sub1, setSub1] = useState(false);
  const [eduID, setEduID] = useState(0);
  const [cateCourseID, setIDCate] = useState(0);
  const [cateCourses, setCate] = useState([]);
  const [page, setPage] = useState(1);
  const [classList, setClassList] = useState([]);
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState([]);
  
  const url = `https://api.trungthanhweb.com/api/`;
  const urlimg = `https://api.trungthanhweb.com/images/`;
  const [name,setName]=useState('');
  const changeSub1 = () => {
    if (sub1 == false) {
      setSub1(true);
    } else {
      setSub1(false);
    }
  };
  const changeMenuDisplay = () => {
    if (showMenu) {
      setShowMenu(false);
    } else {
      setShowMenu(true);
    }
  };
  const setClassName = (name) => {
    axios({
      method: "post",
      url: url + "getCourseClass",
      data: {
        id: Number(cateCourseID),
        name: name,
        page: page,
      },
    }).then((res) => {
      if (res.data.check == true) {
        setData(res.data.course.data);
        var arr = [];
        for (let i = 1; i < res.data.course.last_page + 1; i++) {
          arr.push(i);
        }
        setPagination(arr);
        setName(name)
      }
    });
  };
  const setPage1=(page)=>{
    setPage(page);
    setClassName(name);
  }
  useEffect(() => {
    if (cateCourseID != 0) {
      fetch(url + "getClass/" + cateCourseID)
        .then((res) => res.json())
        .then((res) => {
          setClassList(res);
        });
    }
  }, [cateCourseID]);
  useEffect(() => {
    if (eduID != 0) {
      fetch(url + `coursecates/${eduID}`)
        .then((res) => res.json())
        .then((res) => {
          setCate(res);
        });
    }
  }, [eduID]);
  useEffect(() => {
    dispatch(getEdu());
    dispatch(getCourse());
  }, []);
  return (
    <>
      <Subheader />
      {/* ***** Header Area Start ***** */}
      <header className="header-area header-sticky">
        <div className="container">
          <div className="row">
            <div className="col">
              <nav className="main-nav">
                {/* ***** Logo Start ***** */}
                <a href="/" className="logo">
                  MARATHON
                </a>
                {/* ***** Logo End ***** */}
                {/* ***** Menu Start ***** */}
                <ul
                  className="nav"
                  style={{ ...(showMenu ? { display: "block" } : {}) }}
                >
                  <li className="scroll-to-section">
                    <a href="#top" className="active">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#">Meetings</a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="#apply">Apply Now</a>
                  </li>
                  <li className="has-sub">
                    <a href="#" onClick={(e) => changeSub1()}>
                      Loại giáo dục
                    </a>
                    <ul
                      className="sub-menu"
                      style={{ display: sub1 == true ? "block" : "none" }}
                    >
                      {educations &&
                        educations.length > 0 &&
                        educations.map((item, index) => (
                          <li key={index}>
                            <a href="#" onClick={(e) => setEduID(item.id)}>
                              {item.name}
                            </a>
                          </li>
                        ))}
                    </ul>
                  </li>
                  <li className="scroll-to-section">
                    <a href="#courses">Courses</a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="#contact">Contact Us</a>
                  </li>
                </ul>
                <a
                  className={`menu-trigger ${showMenu ? "active" : ""}`}
                  onClick={(e) => changeMenuDisplay()}
                >
                  <span>Menu</span>
                </a>
                {/* ***** Menu End ***** */}
              </nav>
            </div>
          </div>
        </div>
      </header>
      {/* ***** Header Area End ***** */}
      <Carousel />
      <section className="upcoming-meetings" id="meetings">
        <div className="container">
          {cateCourses.length > 0 && (
            <div className="row">
              <div className="col-lg-12"></div>
              <div className="col-lg-4">
                <div className="categories">
                  <h4>Loại lớp</h4>
                  <ul>
                    {cateCourses.map((item, index) => (
                      <li key={index}>
                        <button onClick={(e) => setIDCate(item.id)}>
                          {item.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                  <div className="main-button-red">
                    <a href="#">All Upcoming Meetings</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <div style={{ marginTop: "-6%" }} className="row">
                  <section className="meetings-page" id="meetings">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="filters">
                          <ul>
                            {classList.length > 0 &&
                              classList.map((item, index) => (
                                <li
                                  key={index}
                                  data-filter=".soon"
                                  onClick={(e) => setClassName(item.Grade)}
                                >
                                  {item.Grade}
                                </li>
                              ))}
                            {/* <li data-filter="*" className="active">
                              All Meetings
                            </li> */}
                          </ul>
                        </div>
                      </div>

                      <div className="col-lg-12">
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="row grid">
                              {data.length > 0 &&
                                data.map((item,index) => (
                                  <div key={index} className="col-md-4">
                                    <div className="meeting-item">
                                      <div className="thumb">
                                        <div className="price">
                                          <span>
                                            {Intl.NumberFormat("en-US").format(
                                              item.price
                                            )}
                                          </span>
                                        </div>
                                        <Link to={`/${item.id}`}>
                                          <img
                                            src={urlimg + item.image}
                                            alt=""
                                          />
                                        </Link>
                                      </div>
                                      <div className="down-content">
                                        <div className="date">
                                          <h6>{/* Nov <span>12</span> */}</h6>
                                        </div>
                                        <Link to={`/${item.id}`}>
                                          <h4>{item.name}</h4>
                                        </Link>
                                        <p style={{ marginLeft: "0px" }}>
                                          {item.summary}
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="pagination">
                              <ul>
                                {pagination.length > 0 &&
                                  pagination.map((item) => (
                                    <li>
                                      <button
                                        onClick={(e) => setPage1(item)}
                                        className="ms-3"
                                      >
                                        {item}
                                      </button>
                                    </li>
                                  ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
      <Contact/>
    </>
  );
}

export default Home;
