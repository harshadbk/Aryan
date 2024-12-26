// import React from "react";
import PageHeader from "../../components/pageHeader/PageHeader";

const ApiSec = () => {
  return (
    <div>
      <PageHeader
        name={"CRM Software"}
        bgText={"CWAD Services"}
        arrayOfLink={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "CWAD", path: "#" },
          { name: "CRM Software", path: "#" },
        ]}
      />
    </div>
  );	
};

export default ApiSec;
