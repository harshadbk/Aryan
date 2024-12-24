import PageHeader from "../../components/pageHeader/PageHeader";
import Footer from "../../components/footer/Footer";
import React from "react";
import LeadershipTeam from "../../components/leadership team/LeadershipTeam";

const Key25 = () => {
  return (
    <div>
      <PageHeader
        name={"Key2Sec - The Infosec Knowledge Hub"}
        bgText={"Key-25"}
        arrayOfLink={[
          { name: "Home", path: "/" },
          { name: "Company", path: "/company" },
          { name: "Key2Sec - The Infosec Knowledge Hub", path: "#" },
        ]}
      />
 
    </div>
  );
};

export default Key25;
