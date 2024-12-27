import React from 'react'
import PageHeader from "../../components/pageHeader/PageHeader";

const testimonials = () => {
    return (
        <div>
            <PageHeader
                name={"Testimonials"}
                bgText={"Company"}
                arrayOfLink={[
                    { name: "Home", path: "/" },
                    { name: "Company", path: "/about" },
                    {name:"Testimonials",path:"#"}
                ]}
            />
        </div>
    )
}

export default testimonials
