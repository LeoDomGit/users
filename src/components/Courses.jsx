import React, { useEffect, useState } from "react";
import { getEdu } from "../redux/eduSlice";
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
function Courses() {
  const dispatch = useDispatch();
  const { educations, loading } = useSelector((state) => state.educations);
  const [courses,setCourses] = useState([]);
  const url =`https://api.trungthanhweb.com/api/`;
  const urlimg =`https://api.trungthanhweb.com/images/`;

  useEffect(() => {
    dispatch(getEdu());
    fetch(url+'getCurrentCourses')
    .then(res=>res.json()).then((res)=>{
      setCourses(res);
    })
  }, []);
  return (
    <>
      <section className="upcoming-meetings" id="meetings">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-heading">
                <h2></h2>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="categories">
                <h4>Loại hình giáo dục</h4>
                <ul>
                  {educations.length > 0 &&
                    educations.map((item,index) => (
                      <li key={index}>
                        <a href="#">{item.name}</a>
                      </li>
                    ))}
                </ul>
                <div className="main-button-red">
                  <a href="#">All Upcoming Meetings</a>
                </div>
              </div>
            </div>
            <div className="col-lg-8 mt-4">
              <div className="row">
              {courses && courses.length>0 && courses.map((item,index)=>(
                <div key={index} className="col-lg-6">
                  <Link to={`/`+item.id}>
                  <div className="meeting-item">
                  <div className="thumb">
                    <div className="price">
                      <span>{Intl.NumberFormat('en-US').format(item.price)} đ</span>
                    </div>
                    <a href="meeting-details.html">
                      <img
                        src={urlimg+item.image}
                        alt="New Lecturer Meeting"
                      />
                    </a>
                  </div>
                  <div className="down-content">
                    <div className="date">
                      <h6>
                        Nov <span>10</span>
                      </h6>
                    </div>
                    <a href="meeting-details.html">
                      <h4>{item.name}</h4>
                    </a>
                    <p>
                      {item.summary}
                      <br />
                      {item.eduname}
                    </p>
                  </div>
                </div>
                  </Link>
              </div>
              ))}

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Courses;
