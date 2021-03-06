import { Back, Power4, TweenMax } from "gsap";
import React, { useCallback, useEffect } from "react";
import { Link, Route } from "react-router-dom";
import "./style.css";

const Navigation = () => {
  const menu = [
    {
      to: "/my-cv",
      label: "profile",
      exact: true,
    },
    {
      to: "/skill",
      label: "skill",
      exact: false,
    },
    {
      to: "/education",
      label: "education",
      exact: false,
    },
    {
      to: "/interest",
      label: "interest",
      exact: false,
    },
  ];

  const MenuLink = ({ label, to, exactOnlyWhenActive }) => {
    return (
      <Route
        path={to}
        exact={exactOnlyWhenActive}
        children={({ match }) => {
          //   var active = match ? "active" : "";
          return (
            <li
              as={Link}
              to={to}
              link={true}
              // active={activeItem === label}
              // onClick={handleItemClick}
            >
              <Link to={to} style={{ textDecoration: "none", color: "black" }} onClick={() => onCloseNavigation()}>
                {label}
              </Link>
            </li>
          );
        }}
      />
    );
  };

  const showNavigation = () => {
    var result = null;
    result = menu.map((el, i) => {
      return <MenuLink label={el.label} to={el.to} exactOnlyWhenActive={el.exact} key={i} />;
    });
    return result;
  };

  const onCloseNavigation = () => {
    // console.log("ok");

    // Reset animation for button menu
    TweenMax.to(".menu", {
      x: 0,
      display: "block",
    });

    // Set animation
    TweenMax.to(".background-1", {
      opacity: 1,
      x: "-1em",
      y: "1em",
      ease: Power4.easeInOut,
    });
    TweenMax.to(".background-2", {
      opacity: 1,
      x: "1em",
      y: "-1em",
      ease: Power4.easeInOut,
    });

    TweenMax.to(".background-1", {
      delay: 1,
      x: 0,
      y: 0,
      // ease: Power4.easeInOut,
    });
    TweenMax.to(".background-2", {
      delay: 1,
      x: 0,
      y: 0,
      // ease: Power4.easeInOut,
    });
    TweenMax.to(".select-option", {
      delay: 0.4,
      zIndex: -1,
      opacity: 0,
    });
  };
  return (
    <div className="select-option" style={{ zIndex: "-10", opacity: 0 }}>
      <div className="menu-close" onClick={() => onCloseNavigation()}>
        {/* <!-- svg -1 --> */}
        <div className="type-1">
          <svg id="svg-1" width="99" height="154" viewBox="0 0 99 154" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d)">
              <path d="M7 10C7 4.47715 11.4772 0 17 0H99V146H17C11.4772 146 7 141.523 7 136V10Z" fill="black" />
              <rect x="24" y="96.3259" width="74" height="7" rx="3.5" transform="rotate(-45 24 96.3259)" fill="white" />
              <rect x="76.3259" y="101.276" width="74" height="7" rx="3.5" transform="rotate(-135 76.3259 101.276)" fill="white" />
            </g>
            <defs>
              <filter id="filter0_d" x="0" y="0" width="100" height="154" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dx="-3" dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="background-1">
        {/* <!-- icon --> */}
        <div className="icon-option">
          <svg id="icon-main" width="191" height="191" viewBox="0 0 191 191" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M145.645 28.083C144.947 28.0847 144.262 27.8992 143.66 27.5458C127.105 18.6822 112.791 14.9219 95.6306 14.9219C78.5562 14.9219 62.3436 19.1298 47.5971 27.5458C45.5117 28.7246 42.9415 27.9039 41.7328 25.7402C41.1933 24.6959 41.0716 23.4854 41.3924 22.3546C41.7132 21.2238 42.4525 20.2575 43.46 19.6521C59.3644 10.6317 77.3464 5.9154 95.6306 5.96874C113.996 5.96874 130.037 10.1767 147.63 19.5775C148.656 20.1419 149.42 21.0861 149.759 22.2075C150.097 23.3289 149.982 24.5383 149.439 25.5761C149.112 26.3129 148.581 26.9406 147.909 27.385C147.237 27.8293 146.451 28.0715 145.645 28.083ZM22.2448 75.0869C21.3488 75.0805 20.4764 74.7992 19.7454 74.2811C18.7943 73.5743 18.1547 72.526 17.9613 71.3569C17.7678 70.1879 18.0357 68.9894 18.7083 68.0139C27.2474 55.4795 38.1068 45.6311 51.0478 38.7372C78.1235 24.248 112.791 24.1436 139.952 38.6476C152.89 45.5415 163.753 55.3005 172.292 67.7453C172.962 68.7217 173.228 69.9194 173.035 71.0876C172.841 72.2558 172.203 73.3039 171.255 74.0125C170.794 74.3565 170.268 74.6024 169.709 74.735C169.15 74.8676 168.57 74.8841 168.004 74.7834C167.438 74.6827 166.899 74.4669 166.42 74.1496C165.941 73.8322 165.532 73.4198 165.219 72.9381C157.459 61.6572 147.63 52.7936 135.987 46.6159C111.239 33.4548 79.5896 33.4548 54.9275 46.7055C43.1989 52.9726 33.3691 61.9258 25.6097 73.1918C25.2751 73.7846 24.7847 74.2746 24.1916 74.6086C23.5984 74.9427 22.9252 75.1081 22.2448 75.0869ZM76.1389 183.166C75.569 183.171 75.0046 183.054 74.4839 182.823C73.9632 182.591 73.4984 182.25 73.1209 181.823C65.619 174.019 61.5528 168.99 55.7892 158.172C49.8204 147.16 46.7353 133.73 46.7353 119.315C46.7353 92.7245 68.6369 71.058 95.5448 71.058C122.453 71.058 144.369 92.7245 144.369 119.315C144.386 119.892 144.287 120.466 144.078 121.004C143.869 121.542 143.554 122.032 143.152 122.446C142.751 122.86 142.27 123.189 141.738 123.414C141.207 123.639 140.636 123.755 140.059 123.755C139.482 123.755 138.911 123.639 138.379 123.414C137.848 123.189 137.367 122.86 136.965 122.446C136.563 122.032 136.248 121.542 136.039 121.004C135.83 120.466 135.731 119.892 135.748 119.315C135.748 97.6487 117.722 80.0111 95.5635 80.0111C73.4045 80.0111 55.3602 97.6487 55.3602 119.315C55.3602 132.208 58.117 144.115 63.377 153.785C68.8981 164.081 72.7031 168.468 79.3322 175.451C80.1183 176.32 80.5537 177.45 80.5537 178.622C80.5537 179.794 80.1183 180.924 79.3322 181.793C78.4858 182.647 77.341 183.139 76.1389 183.166ZM137.971 166.603C127.709 166.603 118.655 163.917 111.239 158.634C104.921 154.206 99.7588 148.324 96.1881 141.484C92.6175 134.644 90.7426 127.046 90.7213 119.33C90.6971 118.749 90.7907 118.169 90.9966 117.624C91.2024 117.08 91.5161 116.583 91.919 116.163C92.3218 115.743 92.8054 115.409 93.3406 115.181C93.8759 114.952 94.4518 114.835 95.0337 114.835C95.6156 114.835 96.1915 114.952 96.7268 115.181C97.2621 115.409 97.7457 115.743 98.1485 116.163C98.5513 116.583 98.8651 117.08 99.0709 117.624C99.2767 118.169 99.3703 118.749 99.3461 119.33C99.3606 125.597 100.889 131.768 103.802 137.318C106.714 142.867 110.924 147.631 116.074 151.203C122.195 155.501 129.354 157.545 137.979 157.545C140.983 157.492 143.977 157.192 146.932 156.65C149.26 156.202 151.502 157.814 151.931 160.321C152.149 161.478 151.9 162.674 151.238 163.647C150.576 164.621 149.554 165.292 148.398 165.513C144.963 166.192 141.473 166.552 137.971 166.588V166.603ZM120.636 185.031C120.257 185.015 119.882 184.955 119.517 184.852C105.804 180.913 96.8355 175.63 87.4348 166.051C75.3592 153.606 68.7227 137.042 68.7227 119.315C68.7227 104.811 80.6229 92.9931 95.2799 92.9931C109.937 92.9931 121.841 104.811 121.841 119.315C121.841 128.895 129.861 136.684 139.777 136.684C149.693 136.684 157.713 128.895 157.713 119.315C157.713 85.562 129.686 58.1655 95.1941 58.1655C70.7036 58.1655 48.2835 72.3114 38.1963 94.2466C34.8389 101.499 33.1079 110.004 33.1079 119.315C33.1079 126.299 33.7085 137.311 38.8827 151.636C39.7482 153.964 38.6253 156.56 36.3833 157.366C35.8505 157.569 35.2821 157.662 34.7124 157.64C34.1427 157.618 33.5834 157.48 33.068 157.236C32.5527 156.993 32.092 156.647 31.7135 156.22C31.3351 155.794 31.0468 155.295 30.8659 154.755C26.7052 143.402 24.5737 131.406 24.5689 119.315C24.5689 108.572 26.5535 98.7977 30.4332 90.3072C41.9044 65.313 67.3424 49.1228 95.1941 49.1228C134.431 49.1228 166.338 80.5483 166.338 119.226C166.338 133.73 154.438 145.548 139.777 145.548C125.116 145.548 113.216 133.73 113.216 119.226C113.22 109.646 105.199 101.842 95.2837 101.842C85.3681 101.842 77.3476 109.631 77.3476 119.211C77.3476 134.506 83.0403 148.846 93.4744 159.589C101.681 168.005 109.515 172.646 121.673 176.153C124.001 176.779 125.295 179.286 124.691 181.614C124.503 182.559 123.999 183.412 123.262 184.033C122.525 184.654 121.599 185.006 120.636 185.031Z"
              fill="black"
            />
          </svg>
        </div>

        <div className="content">
          {/* <!-- contact --> */}
          <div className="contact">
            <p onClick={() => onCloseNavigation()}>
                <Link  to="/contact" link="true">contact</Link>
              {/* <a as={Link} to="/contact">
              </a> */}
            </p>
          </div>
          {/* <!-- feedback --> */}
          <div className="feedback">
            <p>
              <a href={process.env.PUBLIC_URL + "/mycv.pdf" }>DOWN CV</a>
            {/* <Link  to="/feedback" link="true">feedback</Link> */}

            </p>
          </div>
        </div>
      </div>
      <div className="background-2">
        <div className="list-menu-option">
          <ul className="option-list">
            {showNavigation(menu)}
            {/* <li>profile</li>
            <li>skill</li>
            <li>education</li>
            <li>interest</li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
