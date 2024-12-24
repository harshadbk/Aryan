import React from "react";
import PageHeader from "../../components/pageHeader/PageHeader";

const BlueTeam = () => {
  return (
    <div>
      <PageHeader
        name={"Blue Teaming"}
        bgText={"Blue Teaming"}
        arrayOfLink={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Advanced Services", path: "#" },
          { name: "Blue Teaming", path: "#" },
        ]}
      />
    </div>
  );
};

export default BlueTeam;
