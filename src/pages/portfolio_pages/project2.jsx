import React from 'react'
import PageHeader from "../../components/pageHeader/PageHeader";

const project2 = () => {
    return (
        <div>
            <div>
                <PageHeader
                    name={"Project 2"}
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

export default project2
