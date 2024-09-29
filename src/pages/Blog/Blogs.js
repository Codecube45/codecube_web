import React from "react";
import Navbar from "../../components/common/Navbar";
import BannerSection from "../../components/common/BannerSection";
import ContactBanner from "../../assets/images/contact-us.jpg";
import Blog1 from "../../assets/images/blog-1.jpg";
import Footer from "../../components/common/Footer";
import { Link } from "react-router-dom";
import { config } from "../config";
import { slugGenerator } from "../utils/slugGenerator";

const Blogs = () => {
  const blogs = [
    {
      date: "September 29, 2024",
      title: "The Importance of Responsive Design: Why Mobile-First is Non-Negotiable",
      category: "Development",
      image: Blog1,
    },
    {
      date: "September 29, 2024",
      title: "The Power of SEO in Web Development: Building Websites That Rank",
      category: "Development",
      image: Blog1,
    },
    {
      date: "September 29, 2024",
      title: "Custom Web Development vs. Templates: Which is Right for Your Business?",
      category: "Development",
      image: Blog1,
    },
  ];
  return (
    <div>
      <Navbar inner={true} />
      <BannerSection
        Banner={ContactBanner}
        title={"Blog"}
        subtitle={"When asked the question"}
      />
      <div className="site-content mt-5 pt-5">
        <section class="space-pt ellipse-top ellipse-bottom ">
          <div class="container">
            <div class="row justify-content-start">
              <div class="col-lg-12">
                <div class="blog-items grid-wrapper grid-xl-3 grid-md-2 grid-sm-1">
                  {blogs?.map((obj, i) => {
                    return (
                      <div class="blog-post-wrapper blog-style-1">
                        <div class="blog-post-info">
                          <div class="post-meta">
                            <div class="post-meta-date">{obj.date}</div>
                          </div>
                          <h5 class="post-title">
                            <Link
                              to={`${config.appUrl}blog-detail/${slugGenerator(
                                obj.title
                              )}`}
                            >
                              {obj.title}
                            </Link>
                          </h5>
                        </div>
                        <div class="blog-post-img">
                          <img class="img-fluid" src={Blog1} alt="" />
                        </div>
                        <div class="blog-action-info">
                          <h5 class="post-category">
                            <Link
                              to={`${config.appUrl}blog-detail/${slugGenerator(
                                obj.title
                              )}`}
                            >
                              {obj.category}
                            </Link>
                          </h5>
                          <div class="post-link">
                            <Link
                              class="btn-arrow"
                              to={`${config.appUrl}blog-detail/${slugGenerator(
                                obj.title
                              )}`}
                            >
                              <i className="bi bi-arrow-right"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    );
                  })}
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

export default Blogs;
