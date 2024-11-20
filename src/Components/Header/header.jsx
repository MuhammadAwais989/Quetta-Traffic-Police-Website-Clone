import React from "react";
import { useState, useEffect } from "react";
import logo from "../../images/Nav_logo.2dec820e3e2d5541a67f.png";
import { Link } from "react-router-dom";
import { TbMenuDeep } from "react-icons/tb";
import { RxCross2 } from "react-icons/rx";

export function Header() {
  const [mobNav, setmobNav] = useState(false);
  const [navhide, setnavhide] = useState(true);
  const [mobabout, setmobabout] = useState(false);
  const [moblicence, setmoblicence] = useState(false);
  const [mobtraffci, setmobtraffic] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 470) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className={isScrolled ? "scrolled" : ""}>
        <div className="h-logo">
          <img src={logo} alt="" />
        </div>

        <nav>
          <ul>
            <li>
              <Link className="nav-home-active" to="/">
                HOME
              </Link>
            </li>

            <li className="nav-about">
              <Link to="/about">ABOUT</Link>
              <ul className="sub-menu about-sub">
                <li>
                  <Link to="">OFFICES</Link>
                </li>
                <li>
                  <Link to="">AIMS</Link>
                </li>
              </ul>
            </li>

            <li className="nav-license">
              <Link to="/driving-license">DRIVING LICENSE</Link>
              <ul className="sub-menu license-sub">
                <li>
                  <Link to="">License Verification</Link>
                </li>
                <li>
                  <Link to="">Learner Permit</Link>
                </li>
                <li>
                  <Link to="">Permanent LICENSE</Link>
                </li>
                <li>
                  <Link to="">International LICENSE</Link>
                </li>
                <li>
                  <Link to="">Duplicate LICENSE</Link>
                </li>
              </ul>
            </li>

            <li className="nav-traffic">
              <Link to="/traffic">TRAFFIC</Link>
              <ul className="sub-menu traffic-sub">
                <li>
                  <Link to="">License Verification</Link>
                </li>
                <li>
                  <Link to="">Learner Permit</Link>
                </li>
                <li>
                  <Link to="">Permanent LICENSE</Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to="/contact">CONTACT US</Link>
            </li>
          </ul>

          <div className="nav-btn">
            <Link>
              <button className="active-btn">FM 88.6</button>
            </Link>
            <Link>
              <button className="active-btn">Online Appointment</button>
            </Link>
          </div>
        </nav>
      <div className={navhide ? "menu-icon" : ".nav-hide"} onClick={ () => setnavhide(false)}>
        <TbMenuDeep className="nav-icon" onClick={() => setmobNav(true) } />
      </div>
      </header>

      {/* Mobile Nav */}
      <div className={mobNav ? "nav-active" : "mob-nav-cont"}>
        <div className="nav-logo">
          <img src={logo} alt="" />
          <RxCross2 className="mob-nav-icon" onClick={() => setmobNav(false)} />
        </div>

        <div className="mob-nav-link">
          <ul>
            <li className="mob-active-home">
              {" "}
              <Link className="home-active" to="">
                HOME
              </Link>{" "}
            </li>

            <li
              className="mob-nav-about"
              onClick={() =>
                setmobabout(!mobabout) && setmoblicence(!moblicence)
              }
            >
              {" "}
              <Link to="">ABOUT</Link>
              {mobabout ? (
                <ul className="sub-menu mob-about-sub">
                  <li>
                    <Link to="">OFFICES</Link>
                  </li>
                  <li>
                    <Link to="">AIMS</Link>
                  </li>
                </ul>
              ) : (
                ""
              )}
            </li>

            <li
              className="mob-nav-license"
              onClick={() => setmoblicence(!moblicence)}
            >
              {" "}
              <Link to="">DRIVING LICENSE</Link>
              {moblicence ? (
                <ul className="sub-menu mob-license-sub">
                  <li>
                    <Link to="">License Verification</Link>
                  </li>
                  <li>
                    <Link to="">Learner Permit</Link>
                  </li>
                  <li>
                    <Link to="">Permanent LICENSE</Link>
                  </li>
                  <li>
                    <Link to="">International LICENSE</Link>
                  </li>
                  <li>
                    <Link to="">Duplicate LICENSE</Link>
                  </li>
                </ul>
              ) : (
                ""
              )}
            </li>

            <li
              className="mob-nav-license"
              onClick={() => setmobtraffic(!mobtraffci)}
            >
              {" "}
              <Link to="">TRAFFIC</Link>
              {mobtraffci ? (
                <ul className="sub-menu mob-license-sub">
                  <li>
                    <Link to="">Traffic Management</Link>
                  </li>
                  <li>
                    <Link to="">Traffic Problems</Link>
                  </li>
                  <li>
                    <Link to="">Challan/fine</Link>
                  </li>
                </ul>
              ) : (
                ""
              )}
            </li>

            <li>
              {" "}
              <Link to="">CONTACT US</Link>{" "}
            </li>
          </ul>

          <div className="nav-btn">
            <Link>
              <button className="active-btn">FM 88.6</button>
            </Link>
            <Link>
              <button className="active-btn">Online Appointment</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
