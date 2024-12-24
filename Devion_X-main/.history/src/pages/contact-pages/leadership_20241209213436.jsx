import Footer from "../../components/footer/Footer";
import React from "react";
import LeadershipTeam from "../../components/leadership team/LeadershipTeam";
import PageHeader from "../../components/pageHeader/PageHeader";

const Leadership = () => {
  return (
    <div>
      <PageHeader
        name={"Leadership"}
        bgText={"Leadership"}
        arrayOfLink={[
          { name: "Home", path: "/" },
          { name: "Company", path: "/company" },
          { name: "Leadership", path: "#" },
        ]}
      />
 
    </div>
  );
};

export default Leadership;
