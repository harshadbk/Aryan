// import React from "react";
import PageHeader from "../../components/pageHeader/PageHeader";

const ApiSec = () => {
  return (
    <div>
      <PageHeader
        name={"App Development"}
        bgText={"CWAD Services"}
        arrayOfLink={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "VAPT", path: "#" },
          { name: "App Development", path: "#" },
        ]}
      />
    </div>
  );	
};

export default ApiSec;
