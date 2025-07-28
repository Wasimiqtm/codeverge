import { useRef } from "react";
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
  const swiperRef = useRef(null);

  // Custom navigation handlers to reverse direction
  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext(); // Left arrow goes to next
    }
  };
  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev(); // Right arrow goes to previous
    }
  };

  return (
    <section id="clients" className="py-16 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-heading-1 gradient-text-primary mb-4">
            Our Clients
          </h2>
          <p className="text-body-medium text-muted max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about their experience working with CodeVerge.
          </p>
        </div>
        <div className="relative max-w-6xl mx-auto">
          {/* Custom navigation arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gradient-to-r from-[#2EB1CB] to-[#5682C2] text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
            aria-label="Previous Slide"
            style={{ left: '-3rem' }}
          >
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gradient-to-r from-[#5682C2] to-[#2EB1CB] text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
            aria-label="Next Slide"
            style={{ right: '-3rem' }}
          >
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
          <Swiper
            ref={swiperRef}
            modules={[Navigation, Pagination, A11y]}
            pagination={{ clickable: true }}
            spaceBetween={32}
            slidesPerView={1}
            className="!pb-12"
          >
            {testimonials.map((testimonial, idx) => (
              <SwiperSlide key={idx}>
                <div className="gradient-bg-dark rounded-xl p-8 mx-4 flex flex-col items-center relative overflow-hidden">
                  {/* Background gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#2EB1CB]/5 to-[#5682C2]/5 rounded-xl" />
                  
                  {/* Client info - centered */}
                  <div className="flex flex-col items-center mb-6 relative z-10">
                    <div className="relative mb-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-20 h-20 rounded-full object-cover border-3 border-[#2EB1CB] shadow-xl"
                      />
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-r from-[#2EB1CB] to-[#5682C2] rounded-full flex items-center justify-center">
                        <Star className="w-3 h-3 text-white fill-current" />
                      </div>
                    </div>
                    <h4 className="text-heading-4 text-primary text-center mb-2">
                      {testimonial.name}
                    </h4>
                                          <div className="flex mb-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-[#2EB1CB] text-[#2EB1CB]" />
                        ))}
                      </div>
                    <p className="text-caption text-muted text-center">{testimonial.position}</p>
                  </div>
                  
                  {/* Quote content */}
                  <div className="relative z-10">
                    <div className="text-4xl text-[#2EB1CB]/20 absolute -top-2 -left-2">"</div>
                    <p className="text-body-medium text-secondary italic text-center leading-relaxed px-4">
                      {testimonial.content}
                    </p>
                    <div className="text-4xl text-[#2EB1CB]/20 absolute -bottom-2 -right-2">"</div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
