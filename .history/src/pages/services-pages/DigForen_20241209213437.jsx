import React from "react";
import PageHeader from "../../components/pageHeader/PageHeader";

const DigForen = () => {
  return (
    <div>
      <PageHeader
        name={"Digital Forensic"}
        bgText={"Digital Forensic"}
        arrayOfLink={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Advanced Services", path: "#" },
          { name: "Blue Teaming", path: "#" },
          { name: "Digital Forensic", path: "#" },
        ]}
      />
    </div>
  );
};

export default DigForen;
