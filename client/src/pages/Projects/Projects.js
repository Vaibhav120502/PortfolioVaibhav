import React from "react";
import "./Projects.css";
const Projects = () => {
  return (
    <>
      <div className="continer project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          PROJECTS
        </h2>
        <hr />
        <div className="row" id="ads">
        
          <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">FullStack</span>
                  <img
                    src="https://www.nextwebi.com/assets/img/img-source/mobile-top-banner-28.png"
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>

                  <span className="card-detail-badge">React</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Portfolio</h5>
                  </div>
                  <div className="code-btn">
                    <a
                      className="ad-btn"
                      href="https://github.com/Vaibhav120502/PortfolioVaibhav"
                    >
                      View
                    </a>
                    {/* <a
                      className="ad-btn"
                      href="https://vaibhav-ecommerce-site.netlify.app/"
                    >
                      Live
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Frontend</span>
                  <img
                    src="https://unctad.org/sites/default/files/2021-03/2021-03-15_eCommerceCOVID19report-1-1220x675px.jpg"
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">HTML</span>
                  <span className="card-detail-badge">CSS</span>
                  <span className="card-detail-badge">JavaScript</span>
                  {/* <span className="card-detail-badge">Mongodb</span> */}
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">
                      Vaibhav's E-commerce website
                    </h6>
                  </div>
                  <div className="code-btn">
                    <a
                      className="ad-btn"
                      href="https://github.com/Vaibhav120502/EcommerceWebsite"
                    >
                      View
                    </a>
                    <a
                      className="ad-btn"
                      href="https://vaibhav-ecommerce-site.netlify.app/"
                    >
                      Live
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">API</span>
                  <img
                    src="https://t4.ftcdn.net/jpg/05/49/31/73/360_F_549317377_j4ef7Thh9nToAGGKMbo4gYORfa2VIADJ.jpg"
                    alt="project2"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">HTML</span>
                  <span className="card-detail-badge">JavaScript</span>
                  <span className="card-detail-badge">API</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Weather App</h5>
                  </div>
                  <div className="code-btn">
                    <a
                      className="ad-btn"
                      href="https://github.com/Vaibhav120502/WeatherApp"
                    >
                      View
                    </a>
                    <a
                      className="ad-btn"
                      href="https://vaibhav-weatherapp.netlify.app/"
                    >
                      Live
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
          
        </div>
      </div>
    </>
  );
};

export default Projects;
