import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import RedTeam from "../../assets/red-team.png";
import BlueTeam from "../../assets/blue-team.png";
import Net from "../../assets/net.png";
import Web from "../../assets/WebAppSec.png";
import Mob from "../../assets/MobApp.png";
import Api from "../../assets/ApiSec.png";
import Wire from "../../assets/WirePen.png";
import OtIot from "../../assets/Otiot.png";
import Cloud from "../../assets/CloudPen.png";

const ServicesCard = () => {
  const settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    rows: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 1,
        },
      },
    ],
  };
  const settingsAdv = {
    dots: adv.length > 2,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: adv.length > 2 ? <SampleNextArrow /> : null,
    prevArrow: <SamplePrevArrow />,
    rows: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 1,
        },
      },
    ],
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
        }}
        onClick={onClick}
      ></div>
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
        }}
        onClick={onClick}
      ></div>
    );
  }

  const truncateReview = (review) => {
    const words = review.split(" ");
    return words.length > 15 ? words.slice(0, 15).join(" ") + "..." : review;
  };

  return (
    <div className="bg-[#14161b] pb-20 ">
      <div className="px-10 m-auto py-20 flex flex-col gap-10">
        <h1 className="text-[var(--secondary-color)] text-center text-3xl ">
          Our Leading Best Services
        </h1>
        <div>
          <h1 className="text-white text-center text-2xl ">
            Vulnerability Assessment & Penetration Testing
          </h1>
          <div className="mt-20 bg-300">
            <Slider {...settings}>
              {data.map((d) => (
                <div
                  key={d.name}
                  className="bg-white  text-black rounded-xl  h-[450px] sm:h-[400px] "
                >
                  <div className="h-56 bg-indigo-500 flex justify-center items-center rounded-t-xl">
                    <img
                      src={d.img}
                      alt=""
                      className="h-44 w-44 rounded-full"
                    />
                  </div>

                  <div className="flex flex-col items-center justify-center gap-4 p-4">
                    <p className="text-base text-center font-semibold">
                      {d.name}
                    </p>
                    <p className="text-center text-sm">
                      {truncateReview(d.review)}
                    </p>
                    <Link to={d.link}>
                      <button className="bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl">
                        Read More
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <div>
          <h1 className="text-white text-center text-2xl ">
            Advanced Services
          </h1>
          <div className="mt-20 bg-300">
            <Slider {...settingsAdv}>
              {adv.map((d) => (
                <div
                  key={d.name}
                  className="bg-white  text-black rounded-xl  h-[450px] sm:h-[400px] "
                >
                  <div className="h-56 bg-indigo-500 flex justify-center items-center rounded-t-xl">
                    <img
                      src={d.img}
                      alt=""
                      className="h-44 w-44 rounded-full"
                    />
                  </div>

                  <div className="flex flex-col items-center justify-center gap-4 p-4">
                    <p className="text-base text-center font-semibold sm:leading-5">
                      {d.name}
                    </p>
                    <p className="text-center text-sm lg:leading-6 sm:leading-3">
                      {truncateReview(d.review)}
                    </p>
                    <Link to={d.link}>
                      <button className="bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl">
                        Read More
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

const data = [
  {
    name: "Web Development",
    img: Net,
    link: "/net-pen-test",
    review:
      "A website is an extension of yourself and we can help you express it properly. Your website is your number one marketing asset because we live in a digital age. Our web development services ensure your site is responsive, user-friendly, and optimized for search engines, helping you reach a wider audience and achieve your business goals.",
  },
  {
    name: "Web Application Security Testing",
    img: Web,
    review:
      "Uncover and fix security flaws in web applications to protect against attacks like SQL injection, cross-site scripting (XSS), and cross-site request forgery (CSRF).",
    link: "/web-app-sec",
  },
  {
    img: Mob,
    name: "Customized Software Development",
    review:
      "Our customized software development services are designed to meet your specific business needs. We build tailored software solutions that enhance your operational efficiency, streamline processes, and provide a competitive edge. Whether it's a simple application or a complex system, our team delivers robust and scalable software that grows with your business.",
    link: "/mob-app-pen",
  },
  {
    img: Api,
    name: "CRM Software",
    review:
      "Customer Relationship Management (CRM) software helps you manage interactions with current and potential customers. Our CRM solutions improve customer satisfaction, increase sales, and optimize marketing efforts by providing comprehensive tools for contact management, sales tracking, and performance analytics.",
    link: "/api-sec",
  },
  {
    img: Wire,
    name: "ERP Systems",
    review:
      "Enterprise Resource Planning (ERP) systems integrate various business processes into a single unified system. Our ERP solutions provide real-time data, enhance collaboration, and improve decision-making by integrating functions like finance, HR, supply chain, and more into one seamless platform.",
    link: "/wire-pen-test",
  },
  {
    img: OtIot,
    name: "API Development",
    review:
      "APIs (Application Programming Interfaces) enable different software systems to communicate with each other. Our API development services help you create robust, secure, and scalable APIs that facilitate integration with third-party services, improve interoperability, and enhance the functionality of your applications.",
    link: "/ot-iot",
  },
  {
    img: Cloud,
    name: "App Development",
    review:
      "Our app development services cover the entire process from concept to deployment. We build high-quality mobile and web applications that offer a seamless user experience, incorporate the latest technologies, and are optimized for performance. Whether you need an app for iOS, Android, or web, our team delivers solutions that meet your business objectives.",
    link: "/cloud-pen",
  },
];

const adv = [
  {
    name: "Red Teaming",
    img: RedTeam,
    link: "/red-team",
    review:
      "Integration of security practices within DevOps workflows, ensuring continuous security testing and compliance throughout the software development lifecycle.",
  },
  {
    name: "Blue Teaming",
    img: BlueTeam,
    review:
      "Starts their defensive plan by identifying the critical assets, document the importance of these assets to the business and what impact the absence of these assets will have.",
    link: "/blue-team",
  },
];

// ServicesCard.propTypes = {
//   className: PropTypes.string,
//   style: PropTypes.object,
//   onClick: PropTypes.func,
// };

export default ServicesCard;
