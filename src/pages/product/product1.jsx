import React from 'react'
import PageHeader from "../../components/pageHeader/PageHeader";

const product1 = () => {
    return (
        <div>
            <PageHeader
                name={"LMS(Learning Management System)"}
                bgText={"Products"}
                arrayOfLink={[
                    { name: "Home", path: "/" },
                    { name: "Products", path: "/product_pages" },
                ]}
            />
        </div>
    )
}

export default product1
