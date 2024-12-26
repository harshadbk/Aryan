// import React from "react";
import PageHeader from "../../components/pageHeader/PageHeader";

const CloudPen = () => {
  return (
    <div>
      <PageHeader
        name={"APP Development"}
        bgText={"CWAD Services"}
        arrayOfLink={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "CWAD", path: "#" },
          { name: "APP Development", path: "#" },
        ]}
      />
    </div>
  );
};

export default CloudPen;
