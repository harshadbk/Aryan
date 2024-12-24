// import React from "react";
import PageHeader from "../../components/pageHeader/PageHeader";

const WebAppSecu = () => {
  return (
    <div>
      <PageHeader
        name={"Web Application Security Testing"}
        bgText={"CWAD Services"}
        arrayOfLink={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "CWAD", path: "#" },
          { name: "Web Application Security Testing", path: "#" },
        ]}
      />
    </div>
  );
};

export default WebAppSecu;
