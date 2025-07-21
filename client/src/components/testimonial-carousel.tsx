import { useState } from "react";
import { Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "John Davis",
    position: "CEO, TechStart Inc.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    content: "CodeVerge transformed our business with their innovative AI solutions. The team's expertise and dedication exceeded our expectations. Our productivity increased by 300% within the first quarter."
  },
  {
    name: "Sarah Mitchell",
    position: "CTO, Global Dynamics",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    content: "The staff augmentation service provided by CodeVerge helped us scale rapidly. Their developers integrated seamlessly with our team and delivered exceptional results consistently."
  },
  {
    name: "Michael Rodriguez",
    position: "Director, Enterprise Solutions",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
    rating: 5,
    content: "CodeVerge's Dynamics 365 implementation revolutionized our operations. The seamless integration and comprehensive training ensured a smooth transition and immediate ROI."
  }
];

export default function TestimonialCarousel() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-extrabold mb-6"
            style={{
              background: 'linear-gradient(90deg, #2EB1CB, #5682C2, #9FA2AB)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              color: 'transparent',
              display: 'inline-block',
            }}
          >
            Our Clients
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about their experience working with CodeVerge.
          </p>
        </div>
        <div className="relative max-w-6xl mx-auto">
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={32}
            slidesPerView={1}
            className="!pb-12"
          >
            {testimonials.map((testimonial, idx) => (
              <SwiperSlide key={idx}>
                <div className="gradient-bg-dark rounded-2xl p-8 mx-4 flex flex-col items-center">
                  <div className="flex items-center mb-2 px-4 md:px-8 py-4 w-full">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-4 border-[#2EB1CB] shadow-lg mr-4"
                    />
                    <div className="flex flex-col items-start">
                      <h4 className="text-xl font-semibold text-white">
                        {testimonial.name}
                      </h4>
                      <div className="flex text-blue-400 mb-1 mt-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-current" />
                        ))}
                      </div>
                      <p className="text-gray-400">{testimonial.position}</p>
                    </div>
                  </div>
                  <p className="text-lg text-gray-300 italic px-4 md:px-8 py-4 text-center">
                    "{testimonial.content}"
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
