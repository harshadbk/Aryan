import React from "react";
import PageHeader from "../../components/pageHeader/PageHeader";

const ApiSec = () => {
  return (
    <div>
      <PageHeader
        name={"API Security Testing"}
        bgText={"VAPT Services"}
        arrayOfLink={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "VAPT", path: "#" },
          { name: "API Security Testing", path: "#" },
        ]}
      />
    </div>
  );
};

export default ApiSec;
