import PageHeader from "../../components/pageHeader/PageHeader";

const ContactUs = () => {
  return (
    <div>
      <PageHeader
        name={"Contact Us"}
        bgText={""}
        arrayOfLink={[
          { name: "Home", path: "/" },
          { name: "Company", path: "/company" },
          { name: "Contact Us", path: "#" },
        ]}
      />
 
    </div>
  );
};

export default ContactUs;
