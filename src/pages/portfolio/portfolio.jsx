import Slider from "react-slick";
import './portfolio.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import LinerApp from "../../assets/linear_app.webp";
import Liner_app from "../../assets/scrapji.webp";
import Liner_app3 from "../../assets/hazir_tur.webp";
import Liner_app4 from "../../assets/loyal.webp";

const ServicesCard = () => {
  const settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const truncateReview = (review) => {
    const words = review.split(" ");
    return words.length > 15 ? `${words.slice(0, 15).join(" ")}...` : review;
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "black",
          borderRadius: "50%",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "black",
          borderRadius: "50%",
        }}
        onClick={onClick}
      />
    );
  }

  return (
    <div className="services-card-container px-10 py-20 animate-fadeIn">
      <h1 className="h1">
        Our Completed and Ongoing Projects
      </h1>

      <Slider {...settings}>
        {data.map((d) => (
          <div
            key={d.name}
            className="service-card bg-white text-black rounded-xl h-[450px] sm:h-[400px] hover:shadow-2xl transform transition-all duration-300 hover:scale-105 animate-zoomIn"
          >
            <div className="image-section h-56 bg-indigo-500 flex justify-center items-center rounded-t-xl animate-fadeIn">
              <img
                src={d.img}
                alt={d.name}
                className="h-44 w-44 rounded-full"
              />
            </div>
            <div className="content-section flex flex-col items-center justify-center gap-4 p-4">
              <p className="text-base text-center font-semibold">{d.name}</p>
              <p className="text-center text-sm">{truncateReview(d.review)}</p>
              <Link to={d.link}>
                <button className="bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl hover:bg-indigo-600 transition-all duration-300 animate-bounce">
                  Read More
                </button>
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

const data = [
  {
    name: "Linear.app",
    img: LinerApp,
    link: "https://linear-omega.vercel.app/",
    review:
      "Linear is shaped by the practices and principles that distinguish world-class product teams from the rest: relentless focus, fast execution, and a commitment to the quality of craft.",
  },
  {
    name: "Scrap Ji",
    img: Liner_app,
    link: "https://www.scrapji.com/",
    review:
      "To make India trash free by 2030 Everyone has to do their part in joining hands with circular economy of india.where we promote recycling, waste management practices and clean habits to make India the cleanest country of the world Because, today recycling is not just an option but also a necessity",
  },
  {
    name: "Hazir Tur",
    img: Liner_app3,
    link: "https://www.scrapji.com/",
    review:
      "A strong backend system designed and developed for tours management company.Platform can be used by multiple users with multiple roles, Functionalities in the platform is restricted based on the roles and type of the user.It is designed to be used in multiple languages.",
  },
  {
    name: "Loyalty & Competition System - PIMCore",
    img: Liner_app4,
    link: "https://www.codersfortify.com/",
    review:
      "The platform is built on Pimcore to serve as a Collaborative performance analysis tool for dealers and their sales team. Where administrators can bring dealers and salespeople together and analyze performance based on sales data and motivate them with points via timely competitions.",
  },
];

ServicesCard.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
};

export default ServicesCard;
