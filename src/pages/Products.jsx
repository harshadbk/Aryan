import PageHeader from "../components/pageHeader/PageHeader";
import EvolutionOfCyber from "../components/evolution of cyber/EvolutionOfCyber";

const Products = () => {
  return (
    <div>
      <PageHeader
        bgText={"Products"}
        name={"Squad1"}
        arrayOfLink={[
          { name: "Home", path: "/" },
          { name: "Products", path: "#" },
          { name: "Squad1", path: "#" },
        ]}
      />
      <EvolutionOfCyber />
 
    </div>
  );
};

export default Products;
