import React from 'react'
import PageHeader from "../../components/pageHeader/PageHeader";

const project3 = () => {
    return (
        <div>
            <div>
                <PageHeader
                    name={"Project 3"}
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

export default project3
