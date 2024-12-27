import React from 'react'
import PageHeader from "../../components/pageHeader/PageHeader";

const product2 = () => {
  return (
    <div>
      <div>
                  <PageHeader
                      name={"ERS(Enterprise Resource Planning System)"}
                      bgText={"Products"}
                      arrayOfLink={[
                          { name: "Home", path: "/" },
                          { name: "Products", path: "/product_pages" },
                      ]}
                  />
              </div>
    </div>
  )
}

export default product2
