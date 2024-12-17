"use client";

import { FC, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { FaStar } from "react-icons/fa";

type Testimonial = {
  name: string;
  role: string;
  companyLogo: string;
  image: string;
  review: string;
  rating: number;
};

const testimonials: Testimonial[] = [
  {
    name: "Ahsan Raza",
    role: "awesometechinc.com",
    companyLogo: "/reveiws/company-logos/awesometechinc.webp",
    image: "/reveiws/persons/ahsan-raza.jpeg",
    review:
      "I want to express my admiration for Noman Khaliq, an exceptional developer who has recently worked on React projects that truly inspired me. I firmly believe that Noman has the potential to make Pakistan proud in the future. His dedication and consistent efforts are commendable, and he has proven himself to be a highly capable developer. Ignoring such a talented individual would be equivalent to hindering the growth of someone with immense potential. Noman is not only an outstanding developer but also a great human being, and there is no doubt about his remarkable abilities. I am confident that he is destined to become one of the most successful individuals in the times to come.",
    rating: 5,
  },
  {
    name: "Jane Smith",
    role: "Project Manager - abc.com",
    companyLogo: "",
    image: "",
    review:
      "Noman is a great guy, highly recommended for any COMPLEX front-end development job! His skills are top-notch and he will be an amazing addition to any team.",
    rating: 5,
  },
  {
    name: "Michael Brown",
    role: "CTO - xyz solutions",
    companyLogo: "",
    image: "",
    review:
      "Noman is highly skilled and delivered the project on time with exceptional quality. He has a deep understanding of frontend and backend technologies, and I am really happy with his work.",
    rating: 5,
  },
  {
    name: "Sarah Williams",
    role: "Freelancer",
    companyLogo: "",
    image: "",
    review:
      "Working with Noman was extremely easy and pleasant. He truly cares about the success of the project and delivers outstanding results. His expertise in MERN stack development is exceptional!",
    rating: 5,
  },
];

const TestimonialSlider: FC = () => {
  const [selectedReview, setSelectedReview] = useState<Testimonial | null>(null);
  const placeholderImage = "/reveiws/placeholder.png";

  const filteredTestimonials = testimonials.filter(
    (testimonial) => testimonial.rating === 5
  );

  return (
    <div className="container testimonials-section">
      <div className="testimonials-header">
        <span className="testimonials-title">Testimonials</span>
      </div>
      <p className="testimonials-subtitle">
        Nice things people have said about me:
      </p>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        speed={1000}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        modules={[Autoplay]}
        className="testimonials-swiper"
      >
        {filteredTestimonials.map((testimonial, index) => (
          <SwiperSlide key={index} className="testimonial-slide">
            <div className="testimonial-card">
              <img
                src={testimonial.image || placeholderImage}
                alt={testimonial.name}
                className="testimonial-avatar"
              />
              <p className="testimonial-review">
                &quot;{testimonial.review}&quot;
              </p>
              {testimonial.review.length > 200 && (
                <button
                  onClick={() => setSelectedReview(testimonial)}
                  className="read-more"
                >
                  Read More
                </button>
              )}
              <div className="testimonial-info">
                <div className="testimonial-name">{testimonial.name}</div>
                {testimonial.companyLogo && (
                  <img
                    src={testimonial.companyLogo}
                    alt="Company Logo"
                    className="company-logo"
                  />
                )}
                <div className="rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="star" />
                  ))}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {selectedReview && (
        <div className="modal-overlay">
          <div className="modal">
            <img
              src={selectedReview.image || placeholderImage}
              alt={selectedReview.name}
              className="modal-avatar"
            />
            <h3 className="modal-name">{selectedReview.name}</h3>
            <div className="modal-role">{selectedReview.role}</div>
            <p className="modal-review">&quot;{selectedReview.review}&quot;</p>
            <div className="modal-rating">
              {[...Array(selectedReview.rating)].map((_, i) => (
                <FaStar key={i} className="star" />
              ))}
            </div>
            {selectedReview.companyLogo && (
              <img
                src={selectedReview.companyLogo}
                alt="Company Logo"
                className="modal-company-logo"
              />
            )}
            <button
              onClick={() => setSelectedReview(null)}
              className="modal-close"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TestimonialSlider;
