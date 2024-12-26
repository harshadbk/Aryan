// import React from "react";
import PageHeader from "../../components/pageHeader/PageHeader";

const ExtRedTeam = () => {
  return (
    <div>
      <PageHeader
        name={"External Red Teaming"}
        bgText={"Red Teaming"}
        arrayOfLink={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Advanced Services", path: "#" },
          { name: "Red Teaming", path: "#" },
          { name: "External Red Teaming", path: "#" },
        ]}
      />
    </div>
  );
};

export default ExtRedTeam;
