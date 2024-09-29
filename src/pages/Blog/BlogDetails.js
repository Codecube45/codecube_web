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
import { useParams } from "react-router-dom";

const BlogDetails = () => {
  const params = useParams();
  let content;
  if (
    params.slug ==
    "the-importance-of-responsive-design-why-mobile-first-is-non-negotiable"
  ) {
    content = {
      title:
        "The Importance of Responsive Design: Why Mobile-First is Non-Negotiable",
      para: [
        "In today’s fast-paced, mobile-dominated world, having a website that’s accessible across all devices is no longer a luxury—it’s a necessity. Whether users are on smartphones, tablets, or desktops, they expect a seamless browsing experience. Responsive design, which prioritizes flexibility and adaptability, ensures that your website looks and performs well no matter the device. In this blog, we’ll explore why a mobile-first approach to web development is crucial for business success and how it impacts everything from user experience to SEO. What is Responsive Design?",
        "Responsive web design refers to the practice of building a website that adjusts automatically to the screen size and resolution of the device it's being viewed on. This means the website’s layout, images, and navigation elements are flexible and rearrange themselves for optimal readability and usability, whether on a desktop, tablet, or smartphone.",
        "The core of responsive design lies in the use of fluid grids, flexible images, and CSS media queries that make a website respond to different screen sizes. This ensures that users have a consistent experience regardless of the device they are using. Why Mobile-First is Essential",
      ],
      points: [
        {
          main: "Mobile Usage Has Surpassed Desktop",
          description:
            "Mobile traffic has steadily grown over the past decade, with mobile devices now accounting for over 50% of global internet traffic. This trend is likely to continue, as people increasingly rely on their phones to browse, shop, and communicate. By prioritizing mobile-first design, you ensure that the majority of your audience has a positive experience when they visit your site.",
        },
        {
          main: "Google’s Mobile-First Indexing",
          description:
            "In 2019, Google officially rolled out mobile-first indexing, which means it predominantly uses the mobile version of a site for ranking and indexing purposes. If your website isn’t optimized for mobile, it can suffer in search engine rankings, leading to less visibility and lower traffic. Responsive design helps you stay competitive by ensuring that your website is fully optimized for mobile users, improving your chances of ranking higher in search results.",
        },
        {
          main: "Enhanced User Experience",
          description:
            "User experience (UX) is everything in the digital space. If a user visits your website on their mobile device and encounters slow load times, clunky navigation, or difficult-to-read content, they’re likely to leave and never come back. A well-designed, responsive site delivers a smooth and enjoyable experience, encouraging visitors to stay longer, explore more, and ultimately convert into customers.",
        },
        {
          main: "Increased Conversions and ROI",
          description:
            "User experience (UX) is everything in the digital space. If a user visits your website on their mobile device and encounters slow load times, clunky navigation, or difficult-to-read content, they’re likely to leave and never come back. A well-designed, responsive site delivers a smooth and enjoyable experience, encouraging visitors to stay longer, explore more, and ultimately convert into customers.",
        },
      ],
      endPara:
        "With responsive design, you have a single URL for both desktop and mobile versions of your site. This eliminates the need for separate mobile and desktop versions, simplifying SEO efforts by consolidating your site's authority into one URL and making it easier for search engines to crawl and index your content.",
    };
  }else if (params?.slug == "custom-web-development-vs.-templates-which-is-right-for-your-business"){
    content= {
      title:"Custom Web Development vs. Templates: Which is Right for Your Business?",
      para:[
        "When building a new website, businesses often face a crucial decision: should they opt for a custom-built website or go with a ready-made template? Both options have their own benefits and drawbacks, and the right choice depends on your specific business goals, budget, and long-term needs. In this blog, we’ll explore the key differences between custom web development and templates, helping you determine which solution is best for your business. What is Custom Web Development?",
        "Custom web development involves designing and building a website from scratch based on your business’s specific needs and objectives. This means that every aspect of the website—from the design and layout to the functionality and features—is tailored to meet your unique requirements. What are Website Templates?",
        "ebsite templates are pre-designed layouts that you can customize to some extent to suit your brand. Popular website builders like WordPress, Squarespace, and Shopify offer a wide range of templates that allow you to quickly set up a website by filling in your content, changing colors, and adding images."
      ],
      endPara:"Now, let’s dive into the pros and cons of each approach."
    }
  }else {
    content ={
      title:"The Power of SEO in Web Development: Building Websites That Rank",
      para:[
        "When building a website, many businesses focus solely on aesthetics and functionality. While those are important, search engine optimization (SEO) is equally critical. SEO ensures that your site ranks well in search engines like Google, driving organic traffic and helping your business grow. SEO isn’t just about keywords—it's also about the structure, speed, and design of your website. In this blog, we’ll explore how integrating SEO best practices into the web development process can improve visibility, user experience, and long-term success in search rankings.What is SEO in Web Development?",
        "SEO in web development refers to the process of building a website in a way that helps it perform better in search engine rankings. It’s not something that gets tacked on after the fact—it’s built into the core of your website’s structure. From the way your website is coded to the speed it loads and how easily it’s navigated by both users and search engine bots, every aspect of development can impact your site’s SEO. Why SEO Matters for Your Website",
        "The ultimate goal of SEO is to make your website more visible to people searching for your products or services. Ranking high in search engine results can significantly increase the number of visitors to your site, leading to more leads, conversions, and revenue. Here’s why incorporating SEO into web development is critical for your website’s success:"
      ],
      points:[
        {
          main:"Improved Search Visibility",
          description:"Without proper SEO, even the most beautifully designed website can go unnoticed. SEO ensures that your website is discoverable by search engines, meaning it appears higher on search engine results pages (SERPs) for relevant keywords. This visibility is crucial because most users don’t look beyond the first page of results, so ranking high is essential for capturing organic traffic."
        },
        {
          main:"Better User Experience (UX)",
          description:"A key component of SEO is providing a seamless user experience. Search engines, particularly Google, prioritize websites that offer good UX. This includes fast load times, easy navigation, mobile responsiveness, and high-quality content. When users can quickly find what they’re looking for and easily navigate your site, they’re more likely to stay longer and engage, which positively impacts your SEO rankings."
        },
        {
          main:"Increased Credibility and Trust",
          description:"Websites that rank higher on search engines are often viewed as more trustworthy and credible by users. SEO not only helps you get to the top of the results page but also signals to potential customers that your site is reliable and authoritative. This trust can lead to higher conversion rates as users are more likely to engage with businesses they believe to be reputable."
        },
        {
          main:"Long-Term ROI"
        },
      ],
      endPara:"While paid advertising can generate traffic quickly, SEO offers a more sustainable and cost-effective approach to driving traffic over the long term. By investing in SEO during the web development process, you’re setting the foundation for long-term organic growth. As your website begins to rank for relevant keywords, you’ll attract consistent traffic without the need for ongoing ad spend."
    }
  }
  return (
    <div>
      <Navbar inner={true} />
      <BannerSection
        Banner={ContactBanner}
        title={"Blog Details"}
        subtitle={"Success is that it is a process"}
      />
      <div className="site-content mt-5 pt-5">
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
                        <li class="post-meta-date">Sept 29, 2024</li>
                      </ul>
                    </div>
                    <h3 class="post-title">{content?.title}</h3>

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
                      {content?.para?.map((para, i) => {
                        return (
                          <p className="text-white" key={i}>
                            {para}
                          </p>
                        );
                      })}
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
                          {content?.points?.map((point, i) => {
                            return (
                              <>
                                <li key={i + "point"}>
                                  <img
                                    class="img-fluid"
                                    src={ArrowRight}
                                    alt=""
                                  />
                                  {point?.main}
                                </li>
                                <p>{point?.description}</p>
                              </>
                            );
                          })}
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
                      <p class="mb-0">{content?.endPara}</p>
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
