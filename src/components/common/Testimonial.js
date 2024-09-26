import React from "react";
import Icon from "../../assets/images/subtitle-icon.png";
import Quote from "../../assets/images/quote-icon-01.png";


const Testimonial = () => {
  return (
    <div>
      <section class="space-pt testimonial-section overflow-hidden bg-black ellipse-top">
        <div class="space-pb ellipse-bottom">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-md-10">
                <div class="section-title text-center">
                  <span class="sub-title justify-content-center">
                    <img class="img-fluid" src={Icon} alt="" /> Our Testimonial
                  </span>
                  <h2 class="title">
                    {" "}
                    Over 500 clients and 5,000 projects across the globe.
                  </h2>
                </div>
              </div>
            </div>
            <div class="row justify-content-start">
              <div class="col-md-11">
                <div className="row">
                  <div class="item col-md-4">
                    <div class="testimonial-wrapper testimonial-style-2">
                      <div class="testimonial-ratings">
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                      </div>
                      <div class="testimonial-quote">
                        <img class="img-fluid" src={Quote} alt="" />
                      </div>
                      <div class="testimonial-content">
                        <p>
                          The IT-Hub database has been one of our current
                          sources for recruitment, backed by a very experienced
                          team who would go out of their way to make sure that
                          requests are taken ahead.
                        </p>
                      </div>
                      <div class="testimonial-author">
                        <div class="author-info">
                          <h6 class="author-name">Anne Smith</h6>
                          <span class="author-position">Officer</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="item col-md-4">
                    <div class="testimonial-wrapper testimonial-style-2">
                      <div class="testimonial-ratings">
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                      </div>
                      <div class="testimonial-quote">
                        <img class="img-fluid" src={Quote} alt="" />
                      </div>
                      <div class="testimonial-content">
                        <p>
                          The IT-Hub database has been one of our current
                          sources for recruitment, backed by a very experienced
                          team who would go out of their way to make sure that
                          requests are taken ahead.
                        </p>
                      </div>
                      <div class="testimonial-author">
                        <div class="author-info">
                          <h6 class="author-name">John Doe</h6>
                          <span class="author-position">Director</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="item col-md-4">
                    <div class="testimonial-wrapper testimonial-style-2">
                      <div class="testimonial-ratings">
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                      </div>
                      <div class="testimonial-quote">
                        <img class="img-fluid" src={Quote} alt="" />
                      </div>
                      <div class="testimonial-content">
                        <p>
                          The IT-Hub database has been one of our current
                          sources for recruitment, backed by a very experienced
                          team who would go out of their way to make sure that
                          requests are taken ahead.
                        </p>
                      </div>
                      <div class="testimonial-author">
                        <div class="author-info">
                          <h6 class="author-name">Key Benefits</h6>
                          <span class="author-position">Administrator</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
