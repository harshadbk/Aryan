// import React from "react";
import PageHeader from "../../components/pageHeader/PageHeader";

const MobAppPen = () => {
  return (
    <div>
      <PageHeader
        name={"Customized Software Development"}
        bgText={"CWAD Services"}
        arrayOfLink={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "CWAD", path: "#" },
          { name: "Customized Software Development", path: "#" },
        ]}
      />
    </div>
  );
};

export default MobAppPen;