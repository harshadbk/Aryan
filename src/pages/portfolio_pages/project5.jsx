import React from 'react'
import PageHeader from "../../components/pageHeader/PageHeader";

const project5 = () => {
    return (
        <div>
            <div>
                <PageHeader
                    name={"Project 4"}
                    bgText={"Portfolio"}
                    arrayOfLink={[
                        { name: "Home", path: "/" },
                        { name: "PortFolio", path: "/portfolio" },
                    ]}
                />
            </div>
        </div>
    )
}

export default project5
