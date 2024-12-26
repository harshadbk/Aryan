// import React from "react";
import PageHeader from "../../components/pageHeader/PageHeader";

const MobAppPen = () => {
  return (
    <div>
      <PageHeader
        name={""}
        bgText={"VAPT Services"}
        arrayOfLink={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "VAPT", path: "#" },
          { name: "Mobile Application Penetration Testing", path: "#" },
        ]}
      />
    </div>
  );
};

export default MobAppPen;
