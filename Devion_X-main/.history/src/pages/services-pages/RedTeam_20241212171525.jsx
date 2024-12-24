// import React from "react";
import PageHeader from "../../components/pageHeader/PageHeader";

const RedTeam = () => {
  return (
    <div>
      <PageHeader
        name={"Red Teaming"}
        bgText={"Red Teaming"}
        arrayOfLink={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Advanced Services", path: "#" },
          { name: "Red Teaming", path: "#" },
        ]}
      />
    </div>
  );
};

export default RedTeam;
