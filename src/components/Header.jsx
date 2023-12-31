import React, { useEffect, useState } from "react";
import { getEdu } from "../redux/eduSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom"
import Loader from "./Loading.jsx/Loader";
function Header() {
  const dispatch = useDispatch();

  const [showMenu, setShowMenu] = useState(false);
  const { educations, loading } = useSelector((state) => state.educations);
  const [sub1,setSub1]=useState(false);
  const changeSub1 = ()=>{
    if(sub1==false){
      setSub1(true);
    }else{
      setSub1(false);
    }
  }
  const changeMenuDisplay = () => {
    if (showMenu) {
      setShowMenu(false);
    } else {
      setShowMenu(true);
    }
  };
  useEffect(() => {
    dispatch(getEdu());
  }, []);
  return (
    <>
      {/* ***** Header Area Start ***** */}
      {loading && (<Loader/>)}
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
                    <a href="#" onClick={(e)=>changeSub1()}>Loại giáo dục</a>
                    <ul className="sub-menu" style={{'display': sub1==true?'block':'none'}}>
                      {educations && educations.length>0 && educations.map((item,index)=>(
                      <li key={index}>
                      <Link to={`/chitiet/${item.id}`}>{item.name}</Link>
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
    </>
  );
}

export default Header;
