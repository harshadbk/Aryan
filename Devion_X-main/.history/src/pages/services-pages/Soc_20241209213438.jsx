import React from "react";
import PageHeader from "../../components/pageHeader/PageHeader";

const Soc = () => {
  return (
    <div>
      <PageHeader
        bgText={"Soc"}
        name={"Soc (Security Operation Center)"}
        arrayOfLink={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Advanced Services", path: "#" },
          { name: "Blue Teaming", path: "#" },
          { name: "Soc", path: "#" },
        ]}
      />
    </div>
  );
};

export default Soc;
