import React from "react";
import PageHeader from "../../components/pageHeader/PageHeader";

const IntRedTeam = () => {
  return (
    <div>
      <PageHeader
        name={"Internal Red Teaming"}
        bgText={"Red Teaming"}
        arrayOfLink={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Advanced Services", path: "#" },
          { name: "Red Teaming", path: "#" },
          { name: "Internal Red Teaming", path: "#" },
        ]}
      />
    </div>
  );
};

export default IntRedTeam;
