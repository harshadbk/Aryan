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
      name: "API Security Testing",
      review:
        "Ensure your APIs are secure by identifying vulnerabilities that could expose sensitive data or allow unauthorized operations.",
      link: "/api-sec",
    },
    {
      img: Img,
      name: "Wireless Penetration Testing",
      review:
        "Assess the security of your wireless networks to identify weaknesses in encryption, authentication, and configuration settings.",
      link: "/wire-pen-test",
    },
    {
      img: Img,
      name: "OT And IoT Penetration Testing",
      review:
        "Evaluate the security of operational technology and Internet of Things devices to ensure they are resilient against cyber attacks and breaches.",
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
