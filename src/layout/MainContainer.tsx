import Navbar from "./Navbar";
import Footer from "./Footer";
import React, { ReactNode } from "react";

const MainContainer = ({ children }: { children?: ReactNode }) => {

    return (
        <>
            <Navbar />
            <div>{children}</div>
            <Footer />
        </>
    );
};

export default MainContainer;