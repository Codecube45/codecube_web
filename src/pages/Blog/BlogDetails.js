import React from "react";
import Navbar from "../../components/common/Navbar";
import BannerSection from "../../components/common/BannerSection";
import ContactBanner from "../../assets/images/contact-us.jpg";
import Team from "../../assets/images/user1.jpg";
import MainImage from "../../assets/images/blog-details.jpg";
import Blog2 from "../../assets/images/blog-2.jpg";
import Blog3 from "../../assets/images/blog-3.jpg";
import ArrowRight from "../../assets/images/arrow-right.png";
import Quote from "../../assets/images/quote-icon-01.png";
import Footer from "../../components/common/Footer";

const BlogDetails = () => {
  return (
    <div>
      <Navbar inner={true} />
      <BannerSection
        Banner={ContactBanner}
        title={"Blog Details"}
        subtitle={"Success is that it is a process"}
      />
      <div className="site-content">
        <section class="space-pt ellipse-bottom">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-10">
                <div class="blog-single format-standard">
                  <div class="post-content-header">
                    <div class="post-meta">
                      <ul>
                        <li
                          class="post-meta-category"
                          style={{ color: "#77BEFF" }}
                        >
                          Operations
                        </li>
                        <li class="post-meta-date">Mar 26, 2024</li>
                      </ul>
                    </div>
                    <h3 class="post-title">
                      They both will click to a new page listing the.
                    </h3>

                    <div class="blog-single-info">
                      <div className="blog-author">
                        <div class="d-flex align-items-center ">
                          <img
                            class="author-image img-fluid"
                            src={Team}
                            alt="#"
                          />
                          <div class="blog-info">
                            <h6 class="author-name">Writen by</h6>
                            <p>admin</p>
                          </div>
                        </div>
                      </div>
                      {/* <div class="social-icon">
                        <p class="mb-0 me-2 me-sm-4">Share </p>
                        <ul>
                          <li>
                            <a href="#">Fb</a>
                          </li>
                          <li>
                            <a href="#">IN</a>
                          </li>
                          <li>
                            <a href="#">X</a>
                          </li>
                          <li>
                            <a href="#">YT</a>
                          </li>
                        </ul>
                      </div> */}
                    </div>
                  </div>

                  <div class="blog-post-img">
                    <img
                      class="img-fluid radius-10"
                      src={MainImage}
                      alt="Blog Image"
                    />
                  </div>
                  <div class="blog-post-content">
                    <div class="post-content-body">
                      <p className="text-white">
                        Meanwhile, the guy who just wanted to do some farming
                        got all the riches. Make no mistake, the new owner
                        already had money, or he could not have bought the land.
                        There’s nothing in this story to make us think he was
                        dreaming about riches, vast or otherwise.
                      </p>

                      <p class="mb-0 text-white">
                        Was this just another little prank, courtesy of a
                        mischievous Universe? Or is it possible to get good
                        things coming your way with only mild desire — maybe
                        even a calm indifference? Many inspirational writers,
                        including Napoleon Hill, have assured us that a burning
                        desire is one of the prerequisites of acquiring a
                        fortune. I’ve even said it myself, although I added the
                        qualifier that the powerful desire is not so much for
                        the Universe. It’s for you, to help you overcome and
                        battle past your own doubts and resistances.
                      </p>
                      <div class="row my-5">
                        <div class="col-sm-5 mb-4 mb-md-0">
                          <img
                            class="img-fluid radius-10"
                            src={Blog2}
                            alt="Blog Image"
                          />
                        </div>
                        <div class="col-sm-7">
                          <img
                            class="img-fluid radius-10"
                            src={Blog3}
                            alt="Blog Image"
                          />
                        </div>
                      </div>
                      <div class="list-wrapper">
                        <ul class="list col-2 col-xs-1">
                          <li>
                            <img class="img-fluid" src={ArrowRight} alt="" />
                            It is truly amazing the damage that we, as parents,
                            can inflict.
                          </li>
                          <li>
                            <img class="img-fluid" src={ArrowRight} alt="" />
                            One of the main areas that I work on with my clients
                            is shedding.
                          </li>
                          <li>
                            <img class="img-fluid" src={ArrowRight} alt="" />
                            Make a list of your achievements toward your
                            long-term goal and remind yourself that intentions
                            don’t count, only action’s.
                          </li>
                          <li>
                            <img class="img-fluid" src={ArrowRight} alt="" />
                            The bottom line is that we must shed the bad and
                            replace with good beliefs.
                          </li>
                          <li>
                            <img class="img-fluid" src={ArrowRight} alt="" />
                            And it’s not just parents that are the cause –
                            teachers, friends,
                          </li>
                        </ul>
                      </div>
                      <blockquote class="blockquote blockquote-style-1 my-5">
                        <div class="blockquote-content">
                          <div class="quote-icon">
                            <img class="img-fluid" src={Quote} alt="" />
                          </div>
                          <p>
                            Acres of Diamonds… you’ve read the famous story, or
                            at least had it related to you. A farmer hears tales
                            of diamonds and begins dreaming of vast riches. He
                            sells his farm and hikes off over the horizon, never
                            to be heard from again. Rumors say that years later
                            he died destitute, never having found the diamonds
                            he spent his life seeking.
                          </p>
                        </div>
                      </blockquote>
                      <h5>So why do we do it? For the most part</h5>
                      <p class="mb-0">
                        I’ve even said it myself, although I added the qualifier
                        that the powerful desire is not so much for the
                        Universe. It’s for you, to help you overcome and battle
                        past your own doubts and resistances. But haven’t you
                        seen people who seem to coast into good things, like the
                        farmer who found the Hope Diamond? I’ve known people
                        like that.
                      </p>
                    </div>
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

export default BlogDetails;
