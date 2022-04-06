import React from "react";
import { Link } from "react-router-dom";

function MainPage() {
  return (
    <div className="main-page-container">
      <div className="blue-banner">
        <div>
          <h2>IT System management</h2>
        </div>

        <Link to="/login">
          <button>Logout</button>
        </Link>
      </div>
      <div class="curve-one">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
      <div className="white-banner">
        <div>
          <h2>IT System management</h2>
          <p>Create a Ticket</p>
        </div>
      </div>
      <div class="curve-two">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
      <div className="blue-banner">
        <div>
          <h2>IT System management</h2>
          <p>Create a Ticket</p>
        </div>
      </div>
      <div class="curve-three">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class="shape-fill"
          ></path>
        </svg>
        <div className="white-banner">
          <div>
            <h2>IT System management</h2>
            <p>View Dashboard</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
