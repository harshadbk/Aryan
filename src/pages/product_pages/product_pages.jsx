import React from 'react'
import PageHeader from "../../components/pageHeader/PageHeader";

const product_pages = () => {
    return (
        <div>
            <PageHeader
                name={"Product Page"}
                bgText={"Products"}
                arrayOfLink={[
                    { name: "Home", path: "/" },
                    { name: "Products", path: "/product_pages" },
                ]}
            />
        </div>
    )
}

export default product_pages
