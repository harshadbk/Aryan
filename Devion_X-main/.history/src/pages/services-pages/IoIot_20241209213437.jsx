import React from "react";
import PageHeader from "../../components/pageHeader/PageHeader";

const OtIot = () => {
  return (
    <div>
      <PageHeader
        name={"OT And IOT Penetration Testing"}
        bgText={"VAPT Services"}
        arrayOfLink={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "VAPT", path: "#" },
          { name: "OT And IOT Penetration Testing", path: "#" },
        ]}
      />
    </div>
  );
};

export default OtIot;
