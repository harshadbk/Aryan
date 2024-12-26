import PageHeader from "../../components/pageHeader/PageHeader";

const Career = () => {
  return (
    <div>
      <PageHeader
        name={"Cyber Security Professionals"}
        bgText={"Cyber Security Careers"}
        arrayOfLink={[
          { name: "Home", path: "/" },
          { name: "Cyber Security Careers", path: "#" },
        ]}
      />
 
    </div>
  );
};

export default Career;
