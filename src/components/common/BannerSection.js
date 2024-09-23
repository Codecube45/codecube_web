import React from "react";


const BannerSection = ({Banner , title, subtitle}) => {
  return (
    <div>
      <div
        class="inner-header bg-holder"
        style={{backgroundImage: `url(${Banner})`}}
      >
        <div class="container">
          <div class="row  justify-content-center">
            <div class="col-md-12 text-center">
              <h1 class="title">{title}</h1>
              <p>{subtitle}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
