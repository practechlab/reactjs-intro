import React from 'react'
import Footer from "./Footer";
import Header from "./Header";
export default function About() {
    return (
        <>
        <Header showSearch="false" />       
        <div className="container-fluid">        
            <p>This is My About Page</p>
        </div>
        <Footer />
        </>
    )
}
