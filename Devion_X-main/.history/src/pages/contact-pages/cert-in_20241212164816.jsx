import PageHeader from "../../components/pageHeader/PageHeader";
import CyberSecuritySImplify from "../../components/cyber security simplified/CyberSecuritySImplify";

const CertIn = () => {
  return (
    <div>
      <PageHeader
        name={"Cert-IN Empanelled Cyber Security Auditor"}
        bgText={"Cert-In"}
        arrayOfLink={[
          { name: "Home", path: "/" },
          { name: "Company", path: "/company" },
          { name: "Cert-IN Empanelled Cyber Security Auditor", path: "#" },
        ]}
      />
      <CyberSecuritySImplify />
 
    </div>
  );
};

export default CertIn;
