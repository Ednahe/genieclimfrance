import React, { useState } from "react";
import Presentation from "./Presentation";
import Slide from "./Slide";

const Main = () => {
    const [goSlide, setGoSlide] = useState(false);

    const activeSlide = () => {
        setGoSlide(true);
    }

    return <section className="contain-main">
        <div className="container">
            <div className="content">
                {!goSlide ? <Presentation goToSlide={activeSlide} /> : <Slide />}
            </div>
        </div>
    </section>
}

export default Main;