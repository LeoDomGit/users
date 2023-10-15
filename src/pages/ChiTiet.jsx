import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Subheader from "../components/Subheader";
import Carousel from "../components/Carousel";
import axios from "axios";
import Slider from "../components/Slider";
import Courses from "../components/Courses";
import { useParams } from "react-router-dom";

function ChiTiet() {
  const [page, setPage] = useState(1);
  const [courses, setCourse] = useState([]);
  const [cateActive, setcateActive] = useState(0);
  const { id } = useParams();
  const [courseCates, setCate] = useState([]);
  const [groupClass, setClass] = useState([]);
  const [pagination, setPagination] = useState([]);
  const [icCourseCate, setIDCate] = useState(0);
  const [name, setName] = useState('');

  const url = `https://api.trungthanhweb.com/api/`;
  const urlimg = `https://api.trungthanhweb.com/images/`;

  const setClassName = (name) => {
    axios({
      method: "post",
      url: url + "getCourseClass",
      data: {
        id: Number(icCourseCate),
        name: name,
        page: page,
      },
    }).then((res) => {
      if (res.data.check == true) {
        setCourse(res.data.course.data);
        var arr = [];
        for (let i = 1; i < res.data.course.last_page + 1; i++) {
          arr.push(i);
        }
        setPagination(arr);
        setName(name);  
      }
    });
  };
  const setPage1=(page)=>{
    setPage(page);
    setClassName(name);
  }
  useEffect(() => {
    fetch(url + "getCourseCate/" + id)
      .then((res) => res.json())
      .then((res) => {
        setCate(res);
      });
  }, [id]);
  const setCourseCate = (id) => {
    fetch(url + "getClass/" + id)
      .then((res) => res.json())
      .then((res) => {
        setClass(res);
        setIDCate(id);
      });
  };
  return (
    <>
      <Subheader />
      <Header />
      <section className="heading-page header-text" id="top">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h6>Các khóa học hiện tại</h6>
              <h2>Upcoming Meetings</h2>
            </div>
          </div>
        </div>
      </section>
      {/* -=------------------------------------------------ */}
      <section className="meetings-page" id="meetings">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-12">
                  <div className="filters">
                    <ul>
                      {groupClass.length == 0 &&
                        courseCates.length > 0 &&
                        courseCates.map((item, index) => (
                          <li
                            onClick={(e) => setCourseCate(item.id)}
                            key={index}
                            data-filter="*"
                            className={cateActive == index ? "active" : ""}
                          >
                            {item.name}
                          </li>
                        ))}
                      {groupClass.length > 0 &&
                        groupClass.map((item, index) => (
                          <li
                            onClick={(e) => setClassName(item.Grade)}
                            key={index}
                            data-filter="*"
                            className={cateActive == index ? "active" : ""}
                          >
                            {item.Grade}
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="row grid">
                    {courses.length > 0 && courses.map((item,index)=>(
                         <div key={index} className="col-lg-4 templatemo-item-col all soon">
                         <div className="meeting-item">
                           <div className="thumb">
                             <div className="price">
                               <span>{Intl.NumberFormat('en-US').format(item.price)}</span>
                             </div>
                             <a href={`/`+item.id}>
                               <img src={urlimg+item.image} alt="" />
                             </a>
                           </div>
                           <div className="down-content">
                             <div className="date">
                               <h6>
                                 Nov <span>12</span>
                               </h6>
                             </div>
                             <a href={`/`+item.id}>
                               <h4>{item.name}</h4>
                             </a>
                             <p>
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
                            <button onClick={(e)=>setPage1(item)} className="ms-3" >{item}</button>
                          </li>
                        ))}

                      
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer"></div>
      </section>
    </>
  );
}

export default ChiTiet;
