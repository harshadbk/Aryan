import PageHeader from "../../components/pageHeader/PageHeader";
import CyberSecuritySImplify from "../../components/cyber security simplified/CyberSecuritySImplify";

const About = () => {
  return (
    <div>
      <PageHeader
        name={"About Us"}
        bgText={"About Us"}
        arrayOfLink={[
          { name: "Home", path: "/" },
          { name: "Company", path: "#" },
        ]}
      />
      <CyberSecuritySImplify />
      
    </div>
  );
};

export default About;
