import React, { useState } from "react";
import Navbar from "../../components/common/Navbar";
import BannerSection from "../../components/common/BannerSection";
import ContactBanner from "../../assets/images/contact-us.jpg";
import Icon from "../../assets/images/subtitle-icon.png";
import "../../assets/styles/contact.css";
import ContactAddress from "../../assets/images/contact-address.png";
import VerticalLines from "../../components/common/VerticalLines";
import Footer from "../../components/common/Footer";
import { axiosInstance } from "../config";
import Loader from "../../components/common/Loader";
import { notification } from "antd";

const Index = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", mobile);
    formData.append("details", message);
    try {
      const res = await axiosInstance.post("contact", formData, {
        headers: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data",
        },
      });
      setLoading(false)
      if(res.data.success){
        notification.open({
          message: 'Message Received Successfully ',
          description:
            'Your message has been sent! 🎉 Thank you for reaching out to us. We’re excited to connect and will get back to you shortly. Stay tuned!',
          showProgress: true,
        });
        setName('')
        setEmail('')
        setMessage('')
        setMobile('')
      }
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };
  return (
    <div>
      {isLoading && <Loader />}
      <Navbar inner={true} />
      <BannerSection
        Banner={ContactBanner}
        title={"Contact us"}
        subtitle={"Let success motivate you."}
      />

      <div className="site-content">
        <VerticalLines />
        <div className="mt-5  pt-5">
          <section class="space-pt z-index-2">
            <div class="container">
              <div class="row">
                <div class="col-xl-6 col-lg-5">
                  <div class="section-title is-sticky">
                    <span class="sub-title">
                      <img class="img-fluid" src={Icon} alt="" /> Our Direction
                    </span>
                    <h2 class="title">
                      {" "}
                      Get in touch with us. We love talking about digital
                      strategy{" "}
                    </h2>
                    <p>
                      So, make the decision to move forward. Commit your
                      decision to paper, just to bring it into focus. Then, go
                      for it!
                    </p>
                  </div>
                </div>
                <div class="col-xl-6 col-lg-7">
                  <div class="location-items d-flex justify-content-center grid-xl-2 grid-lg-2 grid-md-2 grid-sm-2 grid-xs-1">
                    <div class="location-wrapper location-style-1 bg-black">
                      <div class="location-inner">
                        <div class="location-info">
                          <div class="city-image">
                            <img
                              class="img-fluid"
                              src={ContactAddress}
                              alt=""
                            />
                          </div>
                          <div class="city-info">
                            <h5 class="city-name">
                              <a href="#">Shanghai</a>
                            </h5>
                            <div class="city-location">
                              <div class="location-item">
                                <i class="icon bi bi-geo-alt"> </i>
                                <div class="list-label">
                                  214 West Arnold St. New York, NY 10002
                                </div>
                              </div>
                              <div class="location-item">
                                <i class="icon bi bi-telephone-inbound"></i>
                                <div class="list-label">+(123) 456-7890</div>
                              </div>
                              <div class="location-item">
                                <i class="icon bi bi-envelope"></i>
                                <div class="list-label">
                                  letstalk@worthy.com
                                </div>
                              </div>
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

        <section class="space-pt ellipse-top bg-black">
          <div class="space-pb ellipse-bottom">
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-md-10">
                  <div class="section-title text-center">
                    <span class="sub-title d-flex justify-content-center">
                      <img class="img-fluid" src={Icon} alt="" /> contact us
                    </span>
                    <h2 class="title">
                      {" "}
                      Need assistance? please fill the form{" "}
                    </h2>
                  </div>
                  <div class="form-wrapper">
                    <form
                      class="contact-form form-style-border"
                      onSubmit={handleSubmit}
                    >
                      <div class="row">
                        <div class="col-md-4">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Name"
                            aria-label="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                          />
                        </div>
                        <div class="col-md-4">
                          <input
                            type="email"
                            class="form-control"
                            placeholder="Email"
                            aria-label="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                        </div>
                        <div class="col-md-4">
                          <input
                            type="text"
                            class="form-control"
                            id="phone"
                            placeholder="Phone"
                            value={mobile}
                            onChange={(e) => setMobile(e.target.value)}
                            onKeyPress={(e) => {
                              if (!/[0-9]/.test(e.key)) {
                                e.preventDefault();
                              }
                            }}
                            required
                          />
                        </div>
                        <div class="col-lg-12">
                          <textarea
                            class="form-control"
                            rows="6"
                            placeholder="Message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                          ></textarea>
                        </div>
                        <div class="col-lg-12">
                          <div class="attract-hover">
                            <div class="attract-hover-easing">
                              <button class="btn-effect" href="#">
                                <span>Send Massage</span>
                                <svg
                                  width="20"
                                  height="22"
                                  viewBox="0 0 20 22"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g clip-path="url(#clip0_59_253)">
                                    <path
                                      d="M19.4854 11.4293L17.0513 12.221C13.1214 13.4993 10.3036 16.9595 9.84784 21.0668C9.49371 16.981 6.71926 13.5081 2.81255 12.2604L0.210283 11.4293"
                                      stroke="white"
                                      stroke-width="2"
                                    ></path>
                                    <path
                                      d="M9.83594 20.8889L9.83594 0"
                                      stroke="white"
                                      stroke-width="2"
                                    ></path>
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_59_253">
                                      <rect
                                        width="21.3333"
                                        height="20"
                                        fill="white"
                                        transform="translate(20) rotate(90)"
                                      ></rect>
                                    </clipPath>
                                  </defs>
                                </svg>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
