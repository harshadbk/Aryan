// import React from "react";
import PageHeader from "../../components/pageHeader/PageHeader";

const CloudPen = () => {
  return (
    <div>
      <PageHeader
        name={""}
        bgText={"VAPT Services"}
        arrayOfLink={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "VAPT", path: "#" },
          { name: "", path: "#" },
        ]}
      />
    </div>
  );
};

export default CloudPen;
