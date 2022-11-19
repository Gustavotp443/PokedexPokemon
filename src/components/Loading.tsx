import React from "react";
import loading from "../../public/images/Loading.svg";
import { LoaderContainer, Loader } from "./Loading.style";
const Loading = () => {
    return (
        <LoaderContainer>
            <Loader src={loading} alt="Loading" />
        </LoaderContainer>
    );
};

export default Loading;