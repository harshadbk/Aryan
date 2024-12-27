import React from 'react'
import './portfolio.css';
import PageHeader from "../../components/pageHeader/PageHeader";

const portfolio = () => {
  return (
    <div>
      <div>
                  <div>
                      <PageHeader
                          name={"PortFolio"}
                          bgText={"Portfolio"}
                          arrayOfLink={[
                              { name: "Home", path: "/" },
                              { name: "PortFolio", path: "/portfolio" },
                          ]}
                      />
                  </div>
              </div>
    </div>
  )
}

export default portfolio
