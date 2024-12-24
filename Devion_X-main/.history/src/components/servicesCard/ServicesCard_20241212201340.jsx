import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Pri
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
    name: "Network Penetration Testing",
    img: Net,
    link: "/net-pen-test",
    review:
      "Identify and mitigate vulnerabilities within your network infrastructure to defend against potential cyber threats and unauthorized access.",
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
    name: "Mobile Application Penetration Testing",
    review:
      "Evaluate the security of mobile applications on various platforms to ensure data integrity, privacy, and protection against unauthorized access.",
    link: "/mob-app-pen",
  },
  {
    img: Api,
    name: "API Security Testing",
    review:
      "Ensure your APIs are secure by identifying vulnerabilities that could expose sensitive data or allow unauthorized operations.",
    link: "/api-sec",
  },
  {
    img: Wire,
    name: "Wireless Penetration Testing",
    review:
      "Assess the security of your wireless networks to identify weaknesses in encryption, authentication, and configuration settings.",
    link: "/wire-pen-test",
  },
  {
    img: OtIot,
    name: "OT And IoT Penetration Testing",
    review:
      "Evaluate the security of operational technology and Internet of Things devices to ensure they are resilient against cyber attacks and breaches.",
    link: "/ot-iot",
  },
  {
    img: Cloud,
    name: "Cloud Penetration Testing",
    review:
      "Examine the security of your cloud infrastructure to identify vulnerabilities and ensure compliance with industry best practices for cloud security.",
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

export default ServicesCard;
