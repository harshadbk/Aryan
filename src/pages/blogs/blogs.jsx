import React from 'react'
import PageHeader from "../../components/pageHeader/PageHeader";

const blogs = () => {
    return (
        <div>
            <div>
                <PageHeader
                    name={"Blogs"}
                    bgText={"Blogs"}
                    arrayOfLink={[
                        { name: "Home", path: "/" },
                        { name: "PortFolio", path: "/blogs" },
                    ]}
                />
            </div>
        </div>
    )
}

export default blogs
