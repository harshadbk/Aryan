// import React from "react";
import PageHeader from "../../components/pageHeader/PageHeader";

const OtIot = () => {
  return (
    <div>
      <PageHeader
        name={""}
        bgText={"VAPT Services"}
        arrayOfLink={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "VAPT", path: "#" },
          { name: "CRM Software", path: "#" },
        ]}
      />
    </div>
  );
};

export default OtIot;
