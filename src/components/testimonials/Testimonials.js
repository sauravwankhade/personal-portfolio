import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/Picsart_22-05-18_12-16-57-230.png";
import AVTR2 from "../../assets/WhatsApp Image 2023-10-22 at 20.35.09.jpeg";
import AVTR3 from "../../assets/WhatsApp Image 2023-10-22 at 21.04.51.jpeg";
import AVTR4 from "../../assets/WhatsApp Image 2023-10-22 at 20.35.12.jpeg";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const datas = [
  {
    id: 1,
    avatar: AVTR1,
    name: "Abhishek Bhandari",
    review:
      "Your development skills have created a website that not only looks great but also performs exceptionally well. We appreciate your professionalism and hard work.  ",
  },
  {
    id: 4,
    avatar: AVTR4,
    name: "Darshan Nar",
    review:
      "We can't thank you enough for the outstanding React website you've developed for us. It's user-friendly, visually appealing, and exactly what we needed.",
  },
  {
    id: 2,
    avatar: AVTR2,
    name: "Sujit Gaikwad",
    review:
      "Thank you so much for helping me on the frontend part of my final year project,all the frontend logic was amazing.the code is really clean and easily maintainable",
  },

  {
    id: 3,
    avatar: AVTR3,
    name: "Vishnu",
    review: "thanks for such a simple yet efficient advertisement Web page.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        // install Swiper modules modules=
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {datas.map((data) => {
          return (
            <SwiperSlide key={data.id} className="testimonial">
              <div className="client__avatar">
                <img src={data.avatar} alt={"avtr1"}></img>
              </div>
              <h5 className="client__name">{data.name}</h5>
              <small className="client__review">{data.review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
