// import React from "react";
// import Footer from "../components/footer/Footer";
import EvolutionOfCyber from "../components/evolution of cyber/EvolutionOfCyber";
import PageHeader from "../components/pageHeader/PageHeader";
// import Assesments from "../components/assesments/Assesments";
import Row4Elements from "../components/row4elements/Row4Elements";
// import CollaboratingClosely from "../components/collaborating closely pink/CollaboratingClosely";
// import NavbarContact from "../components/navbar/NavbarContact";
import ServicesProvided from "../components/services provided/ServicesProvided";

import Img from "../assets/blue-team.png";
import RedImage from "../assets/red-team.png";
import BlueImage from "../assets/blue-team.png";

const ServicesPage = () => {
  const vapt = [
    {
      name: "Web Development",
      img: Img,
      review:
        "A website is an extension of yourself and we can help you express it properly. Your website is your number one marketing asset because we live in a digital age. Our web development services ensure your site is responsive, user-friendly, and optimized for search engines, helping you reach a wider audience and achieve your business goals.",
      link: "/net-pen-test",
    },
    {
      name: "Web Application Security Testing",
      img: Img,
      review:
        "Uncover and fix security flaws in web applications to protect against attacks like SQL injection, cross-site scripting (XSS), and cross-site request forgery (CSRF).",
      link: "/web-app-sec",
    },
    {
      img: Img,
      name: "Customized Software Development",
      review:
        "Our customized software development services are designed to meet your specific business needs. We build tailored software solutions that enhance your operational efficiency, streamline processes, and provide a competitive edge. Whether it's a simple application or a complex system, our team delivers robust and scalable software that grows with your business.",
      link: "/mob-app-pen",
    },
    {
      img: Img,
      name: "CRM Software",
      review:
        "Customer Relationship Management (CRM) software helps you manage interactions with current and potential customers. Our CRM solutions improve customer satisfaction, increase sales, and optimize marketing efforts by providing comprehensive tools for contact management, sales tracking, and performance analytics.",
      link: "/api-sec",
    },
    {
      img: Img,
      name: "ERP Systems",
      review:
        "Enterprise Resource Planning (ERP) systems integrate various business processes into a single unified system. Our ERP solutions provide real-time data, enhance collaboration, and improve decision-making by integrating functions like finance, HR, supply chain, and more into one seamless platform.",
      link: "/wire-pen-test",
    },
    {
      img: Img,
      name: "API Development",
      review:
        "APIs (Application Programming Interfaces) enable different software systems to communicate with each other. Our API development services help you create robust, secure, and scalable APIs that facilitate integration with third-party services, improve interoperability, and enhance the functionality of your applications..",
      link: "/ot-iot",
    },
    {
      img: Img,
      name: "Cloud Penetration Testing",
      review:
        "Examine the security of your cloud infrastructure to identify vulnerabilities and ensure compliance with industry best practices for cloud security.",
      link: "/cloud-pen",
    },
  ];

  const adv = [
    {
      name: "Red Teaming",
      img: RedImage,
      review:
        "Integration of security practices within DevOps workflows, ensuring continuous security testing and compliance throughout the software development lifecycle.",
      link: "/red-team",
    },
    {
      name: "Blue Teaming",
      img: BlueImage,
      review:
        "Starts their defensive plan by identifying the critical assets, document the importance of these assets to the business and what impact the absence of these assets will have.",
      link: "/blue-team",
    },
  ];
  return (
    <div>
      <PageHeader
        name={"Services"}
        arrayOfLink={[
          {
            name: "Home",
            path: "/",
          },
          {
            name: "Services",
            path: "#",
          },
        ]}
      />
      <ServicesProvided
        data={vapt}
        title={" Vulnerability Assessment &  Penetration Testing"}
      />
      <Row4Elements />
      <ServicesProvided data={adv} title={"Advanced Services"} />
      <EvolutionOfCyber />
    </div>
  );
};

export default ServicesPage;
