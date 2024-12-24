// import React from "react";
import PageHeader from "../../components/pageHeader/PageHeader";

const OtIot = () => {
  return (
    <div>
      <PageHeader
        name={"API Development"}
        bgText={"CWAD Services"}
        arrayOfLink={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "CWAD", path: "#" },
          { name: "API Development", path: "#" },
        ]}
      />
    </div>
  );
};

export default OtIot;
