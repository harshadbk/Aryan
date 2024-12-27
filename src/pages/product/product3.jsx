import React from 'react'
import PageHeader from "../../components/pageHeader/PageHeader";

const product3 = () => {
  return (
    <div>
      <div>
                  <PageHeader
                      name={"CRM(Customer Relationship Management)"}
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

export default product3
