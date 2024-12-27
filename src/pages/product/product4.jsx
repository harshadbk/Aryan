import React from 'react'
import PageHeader from "../../components/pageHeader/PageHeader";

const product4 = () => {
  return (
    <div>
      <div>
                  <PageHeader
                      name={"E-Commerce"}
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

export default product4
